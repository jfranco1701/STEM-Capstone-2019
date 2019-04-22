from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny

from app.models.organization import Organization
from app.serializers.organization_serializer import OrganizationSerializer

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

    permission_classes = [IsAuthenticated,]

    def get_queryset(self):
        user = self.request.user
        user_role = user.role().lower()
        if user_role == 'admin':
            queryset = Organization.objects.all()
        else:
            if user.organization:
                queryset = Organization.objects.filter(pk=user.organization.pk)
            else:
                queryset = Organization.objects.none() 
        return queryset

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = [AllowAny,]
        return super(OrganizationViewSet, self).get_permissions()
