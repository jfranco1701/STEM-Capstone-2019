from django.db import models

class Organization(models.Model):
    name = models.CharField(max_length=200)
    approved = models.BooleanField(default=False)
    reviewed = models.BooleanField(default=False)

    class Meta:
        ordering = ['reviewed', '-approved', 'name']

    def __str__(self):
        name = self.name
        if not self.reviewed:
            name += " [Not Reviewed]"
        else:
            if self.approved:
                name += " [Approved]"
            else:
                name += " [Declined]"
        return name
