from django.contrib.auth.models import AbstractUser
from django.db import models

USER_TYPE_CHOICES = (
    (1, 'student'),
    (2, 'teacher'),
    (3, 'parent'),
    (4, 'counselor'),
    (5, 'admin'),
)

class User(AbstractUser):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=200, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField(blank=True, null=True)
    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, default=1)
    student = models.BooleanField(default=True)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]
    
    def __str__(self):
        if self.first_name and self.last_name:
            return "{} {} ({})".format(
                self.first_name, self.last_name, self.username
            )
        return self.username

    def role(self):
        return self.get_user_type_display()

    def is_student(self):
        return self.student
