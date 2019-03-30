from app.models.user import User
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    interests = serializers.StringRelatedField(many=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "password",
            "first_name",
            "last_name",
            "address",
            "city",
            "state",
            "zip_code",
            "phone", 
            "date_of_birth",
            "organization",
            "user_type",
            "interests",
            "url",
        )
    
    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
