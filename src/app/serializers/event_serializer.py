from app.models.user import User
from app.models.event import Event
from rest_framework import serializers

class EventSerializer(serializers.HyperlinkedModelSerializer):
    organizer = serializers.HyperlinkedRelatedField(view_name='user-detail', queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    date = serializers.DateField(format="%m/%d/%Y", input_formats=['%m/%d/%Y', 'iso-8601'])
    tags = serializers.StringRelatedField(many=True)

    class Meta:
        model = Event
        fields = (
            "name",
            "date",
            "event_type",
            "organizer",
            "attendees",
            "tags",
            "url",
        )

    def get_validation_exclusions(self):
        exclusions = super(EventSerializer, self).get_validation_exclusions()
        return exclusions + ['organizer']
