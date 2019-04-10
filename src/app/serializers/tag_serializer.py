from app.models.tag import Tag
from rest_framework import serializers

class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = (
            "id",
            "name",
            "url"
            
        )
