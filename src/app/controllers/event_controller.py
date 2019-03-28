from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from datetime import date

from app.models.event import Event
from app.serializers.event_serializer import EventSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [AllowAny,]
        return super(EventViewSet, self).get_permissions()

    def perform_create(self, serializer):
        print(self.request.user)
        serializer.save(organizer=self.request.user)

    @action(detail=False, methods=['get'])
    def order(self, request, *args, **kwargs):
        events = Event.objects.filter(date__gte=date.today()).order_by('date')
        serializer = self.get_serializer(events, many=True)
        return Response(serializer.data)
