from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from app.models.organization import Organization
from app.serializers.organization_serializer import OrganizationSerializer

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = [AllowAny,]
        return super(OrganizationViewSet, self).get_permissions()
