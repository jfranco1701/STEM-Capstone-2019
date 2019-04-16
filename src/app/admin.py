from django.contrib import admin
from app.models.user import User
from app.models.event import Event
from app.models.organization import Organization
from app.models.tag import Tag
from app.models.userloginactivity import UserLoginActivity

class UserLoginActivityAdmin(admin.ModelAdmin):
    pass


class OrganizationAdmin(admin.ModelAdmin):
    actions = ['mark_approved', 'mark_declined']

    def mark_approved(self, request, queryset):
        rows_updated = queryset.update(approved=True, reviewed=True)
        if rows_updated == 1:
            message_bit = "1 organization was"
        else:
            message_bit = "{} organizations were".format(rows_updated)
        self.message_user(request, "{} successfully marked as approved.".format(message_bit))
    mark_approved.short_description = "Mark selected organizations as approved"

    def mark_declined(self, request, queryset):
        rows_updated = queryset.update(approved=False, reviewed=True)
        if rows_updated == 1:
            message_bit = "1 organization was"
        else:
            message_bit = "{} organizations were".format(rows_updated)
        self.message_user(request, "{} successfully marked as declined.".format(message_bit))
    mark_declined.short_description = "Mark selected organizations as declined"


admin.site.disable_action('delete_selected')

admin.site.register(User)
admin.site.register(Event)
admin.site.register(Organization, OrganizationAdmin)
admin.site.register(Tag)
admin.site.register(UserLoginActivity, UserLoginActivityAdmin)
