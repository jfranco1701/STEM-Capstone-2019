from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import viewsets
from .models.user import User
from .models.event import Event
from .serializers import UserSerializer, EventSerializer

User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer