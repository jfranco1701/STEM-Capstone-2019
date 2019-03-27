from app.models.user import User
from app.models.event import Event
from rest_framework import serializers

class EventSerializer(serializers.HyperlinkedModelSerializer):
    organizer = serializers.HyperlinkedRelatedField(view_name='user-detail', queryset=User.objects.all(), default=serializers.CurrentUserDefault())

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

    def get_validation_exclusions(self):
        exclusions = super(EventSerializer, self).get_validation_exclusions()
        return exclusions + ['organizer']
