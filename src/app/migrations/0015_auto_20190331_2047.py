# Generated by Django 2.1.7 on 2019-04-01 01:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_auto_20190331_1618'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='parent_id',
        ),
        migrations.AddField(
            model_name='user',
            name='parent_user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to=settings.AUTH_USER_MODEL),
        ),
    ]
