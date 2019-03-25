from django.contrib.auth import get_user_model
from rest_framework import viewsets

from app.models.user import User
from app.serializers.user_serializer import UserSerializer

User = get_user_model()

def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'lastName': user.last_name,
        'firstName': user.first_name
}

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
