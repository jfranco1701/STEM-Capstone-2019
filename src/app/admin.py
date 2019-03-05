from django.contrib import admin
from .models.user import User
from .models.event import Event
from .models.organization import Organization

admin.site.register(User)
admin.site.register(Event)
admin.site.register(Organization)
