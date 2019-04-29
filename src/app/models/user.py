from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from app.models.organization import Organization
from app.models.tag import Tag

USER_TYPE_CHOICES = (
    (1, "student"),
    (2, "parent"),
    (3, "educator"),
    (4, "admin"),
)

class User(AbstractUser):
    parent_id = models.ForeignKey("self", related_name="children", on_delete=models.SET_NULL, null=True, blank=True)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=200, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField(blank=True, null=True)
    address = models.CharField(max_length=200, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=2, blank=True, null=True)
    zip_code = models.CharField(max_length=10, blank=True, null=True)
    phone = models.CharField(max_length=12, blank=True, null=True)
    organization = models.ForeignKey(Organization, on_delete=models.SET_NULL, null=True, blank=True)
    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, default=2)
    is_student = models.BooleanField(default=False)
    approved_to_post_events = models.BooleanField(default=False)
    account_locked = models.BooleanField(default=False)
    account_locked_updated_at = models.DateTimeField(auto_now_add=True)
    interests = models.ManyToManyField(Tag, related_name="users", blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        user_string = ""
        if self.first_name and self.last_name:
            user_string += "{} {} ({})".format(
                self.first_name, self.last_name, self.username
            )
        else:
            user_string += self.username
        if self.account_locked:
            user_string = "{} [LOCKED]".format(user_string)

        role = self.role()
        user_string = "{} -> {}".format(user_string, role)
        if role == "Educator":
            if self.approved_to_post_events:
                user_string = "{} [APPROVED TO POST EVENTS]".format(user_string)
            else:
                user_string = "{} [NOT APPROVED TO POST EVENTS]".format(user_string)
        return user_string

    def role(self):
        return self.get_user_type_display().capitalize()

    def get_approved_to_post_events(self):
        if self.organization:
            if self.organization.approved and self.approved_to_post_events:
                return True
        return False

    def unlock_account(self):
        if not self.account_locked:
            return None

        self.toggle_account_lock(lock_status=False)
    
    def lock_account(self):
        if self.account_locked:
            return None
        
        self.toggle_account_lock(lock_status=True)

    def toggle_account_lock(self, lock_status=None, lock_toggle_time=timezone.now()):
        if lock_status is None:
            return None

        self.account_locked = lock_status
        self.account_locked_updated_at = lock_toggle_time
        self.save()
