from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from app.models.user import User
from datetime import datetime
from calendar import timegm
from app.serializers.user_serializer import UserSerializer, LockedDownUserSerializer
from app.serializers.password_serializer import PasswordSerializer
from rest_framework_jwt.compat import get_username, get_username_field
from rest_framework_jwt.settings import api_settings
from rest_framework.decorators import list_route, detail_route
from app.serializers.organization_serializer import OrganizationSerializer
from rest_framework.request import Request
from rest_framework.test import APIRequestFactory

User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()

    def get_queryset(self):
        user = self.request.user
        user_role = user.role().lower()
        if user_role == 'admin':
            queryset = User.objects.all()
        else:
            queryset = User.objects.filter(pk=user.pk)
            queryset |= User.objects.filter(parent_id=user.pk)
        return queryset

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = [AllowAny,]
        if self.request.method == 'PATCH':
            self.permission_classes = [IsAuthenticated,]
        return super(UserViewSet, self).get_permissions()

    def get_serializer_class(self):
        locked_down_methods = ['GET', 'PUT', 'PATCH']
        if self.request.method in locked_down_methods:
            serializer_class = LockedDownUserSerializer
        else:
            serializer_class = UserSerializer
        return serializer_class

    def create(self, request):
        serializer = UserSerializer(data=request.data, context={'request': request})

        factory = APIRequestFactory()
        request = factory.get('/')
        serializer_context = {
            'request': Request(request),
        }



        if serializer.initial_data['organization']:
            orgserializer = OrganizationSerializer(data={'name': serializer.initial_data['organization'] }, context=serializer_context)
            if orgserializer.is_valid():
                org = orgserializer.save()
                serializer.initial_data['organization'] = orgserializer.data['url']

        if serializer.is_valid():
            user = serializer.save()
            if user:
                print(serializer.data)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    @detail_route(methods=['post'], permission_classes=[IsAuthenticated], url_path='change-password')
    def set_password(self, request, pk=None):
        serializer = PasswordSerializer(data=request.data)
        user = self.get_object()

        if serializer.is_valid():
            if not user.check_password(serializer.data.get('old_password')):
                return Response({'old_password': ['Wrong password.']},
                                status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            user.set_password(serializer.data.get('new_password'))
            user.save()
            return Response({'status': 'password set'}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'lastName': user.last_name,
        'firstName': user.first_name
	}

def jwt_payload_handler(user):
    username_field = get_username_field()
    username = get_username(user)

    payload = {
        'user_id': user.pk,
        'email': user.email,
        'username': username,
        'user_type': user.user_type,
        'approved_to_post_events': user.approved_to_post_events,
        'exp': datetime.utcnow() + api_settings.JWT_EXPIRATION_DELTA
    }

    payload[username_field] = username

    # Include original issued at time for a brand new token,
    # to allow token refresh
    if api_settings.JWT_ALLOW_REFRESH:
        payload['orig_iat'] = timegm(
            datetime.utcnow().utctimetuple()
        )

    if api_settings.JWT_AUDIENCE is not None:
        payload['aud'] = api_settings.JWT_AUDIENCE

    if api_settings.JWT_ISSUER is not None:
        payload['iss'] = api_settings.JWT_ISSUER

    return payload
