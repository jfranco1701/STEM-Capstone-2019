from app.models.user import User
from rest_framework import serializers
import bleach

class ChildrenListingField(serializers.RelatedField):
    def to_representation(self, value):
        return {'id': value.id, 'last_name': value.last_name, 'first_name': value.first_name,
        'email': value.email, 'date_of_birth': value.date_of_birth}


class UserSerializer(serializers.HyperlinkedModelSerializer):
    parent_id = serializers.ReadOnlyField()
    interests = serializers.StringRelatedField(many=True, required=False)
    password = serializers.CharField(write_only=True)
    user_type = serializers.ReadOnlyField()
    approved_to_post_events = serializers.SerializerMethodField()
    account_locked = serializers.ReadOnlyField()
    account_locked_updated_at = serializers.ReadOnlyField()
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
            "approved_to_post_events",
            "account_locked",
            "account_locked_updated_at",
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

    def get_approved_to_post_events(self, user):
        if user.organization:
            if user.organization.approved and user.approved_to_post_events:
                return True
        return False

    def validate_username(self, value):
        return bleach.clean(value)

    def validate_email(self, value):
        return bleach.clean(value)

    def validate_first_name(self, value):
        return bleach.clean(value)

    def validate_last_name(self, value):
        return bleach.clean(value)

    def validate_address(self, value):
        return bleach.clean(value)

    def validate_city(self, value):
        return bleach.clean(value)
