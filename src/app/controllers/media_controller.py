from rest_framework.response import Response
from rest_framework.decorators import action
from datetime import date
from rest_framework.views import APIView
import json

class MediaConnector(APIView):

    @action(detail=False, methods=['get'])
    def get(self, request, format=None):
        command = request.GET.get("command")
        print(command)
       
        if command == "Init":
            with open('init.json') as json_file: 
                print(json_file)
                data = json.load(json_file)
                return Response(data)

        return Response({ "test" : "test" })

    @action(detail=False, methods=['post'])
    def post(self, request, format=None):
        return Response()
    
    @classmethod
    def get_extra_actions(cls):
        return []