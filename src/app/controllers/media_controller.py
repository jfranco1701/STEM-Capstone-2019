from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from rest_framework.response import Response
#from app.models.user import User
#from app.serializers.user_serializer import UserSerializer

#User = get_user_model()

class MediaConnector(viewsets.ModelViewSet):
    #serializer_class = UserSerializer
    @action(detail=False, methods=['get'])
    def get(self, request, format=None):
        #events = Event.objects.filter(date__gte=date.today()).order_by('date')
        #serializer = self.get_serializer(events, many=True)
        test = { "test" : "test" }
        return Response(test)
