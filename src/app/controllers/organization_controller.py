from django.contrib.auth import get_user_model
from rest_framework import viewsets

from app.models.organization import Organization
from app.serializers.organization_serializer import OrganizationSerializer

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
