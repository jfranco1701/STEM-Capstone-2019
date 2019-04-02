from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from app.models.user import User
from app.serializers.user_serializer import UserSerializer

User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = [AllowAny,]
        if self.request.method == 'PATCH':
            self.permission_classes = [IsAuthenticated,]
        return super(UserViewSet, self).get_permissions()

def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'lastName': user.last_name,
        'firstName': user.first_name
	}
