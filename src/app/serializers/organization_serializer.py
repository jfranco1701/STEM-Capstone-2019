from app.models.organization import Organization
from rest_framework import serializers
import bleach

class OrganizationSerializer(serializers.HyperlinkedModelSerializer):
    approved = serializers.BooleanField(read_only=True, default=False)

    class Meta:
        model = Organization
        fields = (
            "name",
            "approved",
            "reviewed",
            "url"
        )

    def create(self, validated_data):
        organization, created = Organization.objects.get_or_create(**validated_data)
        return organization

    def validate_name(self, value):
        return bleach.clean(value)
