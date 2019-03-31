from app.models.user import User
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    interests = serializers.StringRelatedField(many=True)

    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "first_name",
            "last_name",
            "date_of_birth",
            "organization",
            "user_type",
            "interests",
            "url",
        )
