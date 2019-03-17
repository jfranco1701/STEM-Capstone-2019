# Generated by Django 2.1.7 on 2019-03-17 01:01

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_auto_20190304_2154'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='higher_age_range',
            field=models.PositiveSmallIntegerField(null=True, validators=[django.core.validators.MaxValueValidator(125)]),
        ),
        migrations.AddField(
            model_name='event',
            name='lower_age_range',
            field=models.PositiveSmallIntegerField(null=True, validators=[django.core.validators.MaxValueValidator(125)]),
        ),
    ]
