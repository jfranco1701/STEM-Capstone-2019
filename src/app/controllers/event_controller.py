from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated, BasePermission
from datetime import date

from app.models.event import Event
from app.serializers.event_serializer import EventSerializer

class EventCreation(BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return request.user.get_approved_to_post_events()
        return False

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_queryset(self):
        if self.request.user:
            queryset = Event.objects.user_interests(user=self.request.user)
        else:
            queryset = Event.objects.all()
        return queryset

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [AllowAny,]
        elif self.request.method == 'POST':
            self.permission_classes = [EventCreation,]
        return super(EventViewSet, self).get_permissions()

    def perform_create(self, serializer):
        serializer.save(organizer=self.request.user)

    @action(detail=False, methods=['get'])
    def order(self, request, *args, **kwargs):
        events = Event.objects.filter(date__gte=date.today()).order_by('date')
        serializer = self.get_serializer(events, many=True)
        return Response(serializer.data)
