from app.models.user import User
from app.models.event import Event
from app.models.tag import Tag
from rest_framework import serializers
import bleach

class EventSerializer(serializers.HyperlinkedModelSerializer):
    organizer = serializers.HyperlinkedRelatedField(view_name='user-detail', queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    date = serializers.DateField(format="%m/%d/%Y", input_formats=['%m/%d/%Y', 'iso-8601'])
    tags = serializers.SlugRelatedField(queryset=Tag.objects.all(), many=True, required=False, slug_field='name')

    class Meta:
        model = Event
        fields = (
            "name",
            "date",
            "e_type",
            "event_type",
            "address",
            "organizer",
            "attendees",
            "tags",
            "url",
        )

    def get_validation_exclusions(self):
        exclusions = super(EventSerializer, self).get_validation_exclusions()
        return exclusions + ['organizer']

    def validate_name(self, value):
        return bleach.clean(value)
