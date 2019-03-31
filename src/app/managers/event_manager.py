from django.db import models
from datetime import date

class EventManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(date__gte=date.today())
