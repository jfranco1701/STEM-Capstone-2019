"""stem URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView
from rest_framework import routers

from app.controllers.event_controller import EventViewSet
from app.controllers.user_controller import UserViewSet
from app.controllers.organization_controller import OrganizationViewSet
from app.controllers.tag_controller import TagViewSet
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
from app.controllers.login_controller import ObtainJWTView

# Rest framework router
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'events', EventViewSet)
router.register(r'organizations', OrganizationViewSet)
router.register(r'tags', TagViewSet)

urlpatterns = [
    path('', RedirectView.as_view(url='api/v1/')),
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls)),
    path('api/login/', view=ObtainJWTView.as_view(), name='login'),
    path('api/refresh/', refresh_jwt_token),
]
