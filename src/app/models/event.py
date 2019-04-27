from django.db import models
from django.core.validators import MaxValueValidator
from app.models.user import User
from app.models.tag import Tag
from app.managers.event_manager import EventManager

EVENT_TYPE_CHOICES = (
    (1, "community"),
    (2, "camp"),
)

class Event(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField()
    e_type = models.PositiveSmallIntegerField(choices=EVENT_TYPE_CHOICES, default=1)
    address = models.CharField(max_length=200, blank=True, null=True)
    organizer = models.ForeignKey(User, on_delete=models.CASCADE)
    attendees = models.ManyToManyField(User, related_name="events", blank=True)
    lower_age_range = models.PositiveSmallIntegerField(blank=True, null=True, validators=[MaxValueValidator(125),])
    higher_age_range = models.PositiveSmallIntegerField(blank=True, null=True, validators=[MaxValueValidator(125),])
    tags = models.ManyToManyField(Tag, related_name="events", blank=True)

    objects = EventManager()

    class Meta:
        ordering = ["date"]

    def __str__(self):
        return self.name

    def event_type(self):
        """Returns a string of the event type with the first letter capitalized"""
        return EVENT_TYPE_CHOICES[self.e_type - 1][1].capitalize()

    def age_range(self):
        """Returns a string of the event's desired age range"""
        if self.lower_age_range and self.higher_age_range:
            return "{} - {}".format(self.lower_age_range, self.higher_age_range)
        elif self.lower_age_range:
            return "{} - Any".format(self.lower_age_range)
        elif self.higher_age_range:
            return "Any - {}".format(self.higher_age_range)
        else:
            return None
