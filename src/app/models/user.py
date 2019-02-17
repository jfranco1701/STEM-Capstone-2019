from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

USER_TYPE_CHOICES = (
    (1, 'student'),
    (2, 'teacher'),
    (3, 'parent'),
    (4, 'counselor'),
    (5, 'admin'),
)

class UserManager(BaseUserManager):
    def create_user(self, first_name, last_name, date_of_birth, email, user_type, password=None, is_staff=False, is_admin=False):
        if not email:
            raise ValueError("Users must have an email address")
        user = self.model(
            email = self.normalize_email(email)
        )
        user.staff = is_staff
        user.admin = is_admin
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staffuser(self, first_name, last_name, date_of_birth, email, user_type, password=None, is_staff=False, is_admin=False):
        user = self.create_user(
            first_name, last_name, date_of_birth, email, user_type, password, is_staff=True
        )
        return user

    def create_superuser(self, first_name, last_name, date_of_birth, email, user_type, password=None, is_staff=False, is_admin=False):
        user = self.create_user(
            first_name, last_name, date_of_birth, email, user_type, password, is_staff=True, is_admin=True
        )
        return user

class User(AbstractBaseUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    email = models.EmailField(max_length=200, unique=True)
    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES)
    active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    
    objects = UserManager()

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)

    def role(self):
        return self.get_user_type_display()

    @property
    def is_admin(self):
        return self.admin

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_active(self):
        return self.active

    def is_student(self):
        return self.role() == "student"
