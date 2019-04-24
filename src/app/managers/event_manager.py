from django.db import models
from app.models.user import User
from datetime import date
from itertools import chain

class EventManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(date__gte=date.today())

    def user_interests(self, user=None):
        """
        Gathers event list based on user interests
        User parameter is looking for a user object
        """
        if user and isinstance(user, User):
            # Add user interests first
            user_preferred_events = self.get_queryset().filter(tags__in=[interest for interest in user.interests.all()])
            # Add rest of events
            other_events = self.get_queryset().exclude(pk__in=[event.pk for event in user_preferred_events])

            queryset = list(chain(user_preferred_events, other_events))
        else:
            queryset = self.get_queryset()

        return queryset
