# Generated by Django 2.1.7 on 2019-04-16 12:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0027_auto_20190416_0745'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='parent_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='children', to=settings.AUTH_USER_MODEL),
        ),
    ]