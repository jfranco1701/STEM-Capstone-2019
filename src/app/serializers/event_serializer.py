from app.models.event import Event
from rest_framework import serializers

class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = (
            "name",
            "date",
            "event_type",
            "organizer",
            "attendees",
            "url",
        )
