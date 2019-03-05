from django.contrib.auth import get_user_model
from rest_framework import viewsets

from app.models.user import User
from app.serializers.user_serializer import UserSerializer

User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
