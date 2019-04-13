from django.contrib import admin
from app.models.user import User
from app.models.event import Event
from app.models.organization import Organization
from app.models.tag import Tag
from app.models.userloginactivity import UserLoginActivity

class UserLoginActivityAdmin(admin.ModelAdmin):
    pass

admin.site.register(User)
admin.site.register(Event)
admin.site.register(Organization)
admin.site.register(Tag)
admin.site.register(UserLoginActivity, UserLoginActivityAdmin)
