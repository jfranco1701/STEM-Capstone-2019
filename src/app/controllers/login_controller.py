from rest_framework_jwt.views import ObtainJSONWebToken
from app.serializers.jwt_serializer import JWTSerializer

class ObtainJWTView(ObtainJSONWebToken):
    serializer_class = JWTSerializer
