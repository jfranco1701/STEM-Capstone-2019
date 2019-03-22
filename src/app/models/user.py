from django.contrib.auth.models import AbstractUser
from django.db import models
from app.models.organization import Organization

USER_TYPE_CHOICES = (
    (1, "student"),
    (2, "parent"),
    (3, "educator"),
    (4, "admin"),
)

class User(AbstractUser):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=200, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField(blank=True, null=True)
    organization = models.ForeignKey(Organization, on_delete=models.SET_NULL, null=True)
    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, default=2)
    is_student = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    
    def __str__(self):
        if self.first_name and self.last_name:
            return "{} {} ({})".format(
                self.first_name, self.last_name, self.username
            )
        return self.username

    def role(self):
        return self.get_user_type_display().capitalize()
