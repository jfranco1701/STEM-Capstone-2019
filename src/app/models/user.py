from django.contrib.auth.models import AbstractBaseUser
from django.db import models

USER_TYPE_CHOICES = (
    (1, 'student'),
    (2, 'teacher'),
    (3, 'parent'),
    (4, 'counselor'),
    (5, 'admin'),
)

class User(AbstractBaseUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    email = models.EmailField(max_length=200)
    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES)

    USERNAME_FIELD = "email"