from app.models.organization import Organization
from rest_framework import serializers
import bleach

class OrganizationSerializer(serializers.HyperlinkedModelSerializer):
    is_approved = serializers.BooleanField(read_only=True, default=False)

    class Meta:
        model = Organization
        fields = (
            "name",
            "is_approved",
            "url"
        )

    def validate_name(self, value):
        return bleach.clean(value)
