from django.db import models
from rest_framework import viewsets

from app.models.event import Event
from app.serializers.event_serializer import EventSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
