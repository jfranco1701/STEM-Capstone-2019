from django.contrib.auth import authenticate, user_logged_in
from rest_framework import serializers
from rest_framework_jwt.serializers import JSONWebTokenSerializer, jwt_payload_handler, jwt_encode_handler
from app.models.user import User
from app.models.userloginactivity import UserLoginActivity
import datetime
from django.conf import settings
from django.utils import timezone

class JWTSerializer(JSONWebTokenSerializer):
    def validate(self, attrs):
        credentials = {
            self.username_field: attrs.get(self.username_field),
            'password': attrs.get('password')
        }

        if all(credentials.values()):

            user = User.objects.filter(username=attrs.get(self.username_field)).first()
            if user:
                if user.account_locked:
                    msg = 'Account has been locked. Please contact an administrator.'
                    raise serializers.ValidationError(msg)

            if settings.LOCKOUT_ON_FAILURE:
                user = User.objects.filter(username=attrs.get(self.username_field)).first()
                failedattempts = UserLoginActivity.objects.filter(login_username=attrs.get(self.username_field), status='F',
                    login_datetime__gte=timezone.now() - datetime.timedelta(seconds=settings.LOCKOUT_TIME))

                if user:
                    failedattempts = failedattempts.filter(login_datetime__gte=user.account_locked_updated_at)
                    
                failedattempts = failedattempts.count()

                if failedattempts >= settings.LOCKOUT_MAX_ATTEMPTS -1:
                    msg = 'Too many failed logon attempts.  Account has been locked.'
                    if user:
                        user.lock_account()
                    raise serializers.ValidationError(msg)

            user = authenticate(request=self.context['request'], **credentials)

            if user:
                if not user.is_active:
                    msg = 'User account is disabled.'
                    raise serializers.ValidationError(msg)

                payload = jwt_payload_handler(user)
                user_logged_in.send(sender=user.__class__, request=self.context['request'], user=user)

                return {
                    'token': jwt_encode_handler(payload),
                    'user': user
                }
            else:
                msg = 'Unable to log in with provided credentials.'
                raise serializers.ValidationError(msg)
        else:
            msg = 'Must include "{username_field}" and "password".'
            msg = msg.format(username_field=self.username_field)
            raise serializers.ValidationError(msg)
