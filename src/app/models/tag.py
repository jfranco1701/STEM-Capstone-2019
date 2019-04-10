from django.db import models

class Tag(models.Model):
    id = models
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
