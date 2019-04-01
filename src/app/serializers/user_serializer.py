from app.models.user import User
from rest_framework import serializers

class ChildrenListingField(serializers.RelatedField):
    def to_representation(self, value):
        return {'id': value.id, 'last_name': value.last_name, 'first_name': value.first_name,
        'email': value.email, 'date_of_birth': value.date_of_birth}


class UserSerializer(serializers.HyperlinkedModelSerializer):
    interests = serializers.StringRelatedField(many=True)
    password = serializers.CharField(write_only=True)
    children = ChildrenListingField(many=True, read_only=True)

    class Meta:
        model = User
        fields = (
            "parent_id",
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
            "children",
            "url",
        )
    
    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
