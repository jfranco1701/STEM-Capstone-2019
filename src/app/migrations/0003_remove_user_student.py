# Generated by Django 2.1.7 on 2019-02-19 01:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_event'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='student',
        ),
    ]
