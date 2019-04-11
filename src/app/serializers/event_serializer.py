from app.models.user import User
from app.models.event import Event
from app.models.tag import Tag
from app.serializers.tag_serializer import TagSerializer
from rest_framework import serializers
import bleach

class EventSerializer(serializers.ModelSerializer):
    organizer = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    date = serializers.DateField(format="%m/%d/%Y", input_formats=['%m/%d/%Y', 'iso-8601'])
    tags = TagSerializer(many=True)

    class Meta:
        model = Event
        fields = (
            "id",
            "name",
            "date",
            "e_type",
            "event_type",
            "address",
            "organizer",
            "attendees",
            "tags"
        )

    def get_validation_exclusions(self):
        exclusions = super(EventSerializer, self).get_validation_exclusions()
        return exclusions + ['organizer']

    def validate_name(self, value):
        return bleach.clean(value)


    def create(self, validated_data):

        tags = validated_data.pop('tags')
        print(tags)
        for tag in tags:
            print(tag)
        instance = Event.objects.create(**validated_data)


        return instance
