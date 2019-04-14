from django.contrib.auth import authenticate, user_logged_in
from rest_framework import serializers
from rest_framework_jwt.serializers import JSONWebTokenSerializer, jwt_payload_handler, jwt_encode_handler
from app.models.userloginactivity import UserLoginActivity
import datetime
from django.conf import settings

class JWTSerializer(JSONWebTokenSerializer):
    def validate(self, attrs):
        credentials = {
            self.username_field: attrs.get(self.username_field),
            'password': attrs.get('password')
        }

        if all(credentials.values()):

            if settings.LOCKOUT_ON_FAILURE:
                failedattempts = UserLoginActivity.objects.filter(login_username=attrs.get(self.username_field), status='F',
                    login_datetime__gte=datetime.datetime.now() - datetime.timedelta(seconds=settings.LOCKOUT_TIME)).count()
                if failedattempts >= settings.LOCKOUT_MAX_ATTEMPTS -1:
                    msg = 'Too many failed logon attempts.  Account has been locked.'
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
