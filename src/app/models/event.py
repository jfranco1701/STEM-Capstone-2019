from django.db import models
from .user import User

EVENT_TYPE_CHOICES = (
    (1, "community"),
    (2, "camp"),
)

class Event(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField()
    event_type = models.PositiveSmallIntegerField(choices=EVENT_TYPE_CHOICES, default=1)
    organizer = models.ForeignKey(User, on_delete=models.CASCADE)
    attendees = models.ManyToManyField(User, related_name="events")

    def __str__(self):
        return self.name
