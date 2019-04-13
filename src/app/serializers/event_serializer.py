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

    # https://www.django-rest-framework.org/api-guide/relations/#writable-nested-serializers
    def create(self, validated_data):
        tags_data = validated_data.pop('tags')
        flattened_tags = []
        for tag in tags_data:
            flattened_tags.append(tag.pop('name'))

        tags = Tag.objects.filter(name__in=flattened_tags)
        event = Event.objects.create(**validated_data)
        event.tags.set(tags)

        return event

    def update(self, instance, validated_data):
        print(validated_data)
        tags_data = validated_data.pop('tags')
        flattened_tags = []
        for tag in tags_data:
            flattened_tags.append(tag.pop('name'))

        tags = Tag.objects.filter(name__in=flattened_tags)
        instance.tags.set(tags)

        instance.name = validated_data.pop('name')
        instance.date = validated_data.pop('date')
        #instance.event_type = instance.validated_data.pop('event_type')
        instance.address = validated_data.pop('address')

        instance.save()

        return instance    