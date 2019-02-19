from django.contrib import admin
from .models.user import User
from .models.event import Event

admin.site.register(User)
admin.site.register(Event)
