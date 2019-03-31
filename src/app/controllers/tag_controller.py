from rest_framework import viewsets

from app.models.tag import Tag
from app.serializers.tag_serializer import TagSerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
