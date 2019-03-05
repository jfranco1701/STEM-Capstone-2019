from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from datetime import date

from app.models.event import Event
from app.serializers.event_serializer import EventSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    @action(detail=False, methods=['get'])
    def order(self, request, *args, **kwargs):
        events = Event.objects.filter(date__gte=date.today()).order_by('date')
        serializer = self.get_serializer(events, many=True)
        return Response(serializer.data)
