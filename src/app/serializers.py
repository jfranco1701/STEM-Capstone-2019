from .models.user import User
from .models.event import Event
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "first_name",
            "last_name",
            "date_of_birth",
            "user_type",
            "url",
        )

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
