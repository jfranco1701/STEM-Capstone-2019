from rest_framework import viewsets

from app.models.tag import Tag
from app.serializers.tag_serializer import TagSerializer
from rest_framework.permissions import AllowAny

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [AllowAny,]
        return super(TagViewSet, self).get_permissions()
