# Generated by Django 2.1.7 on 2019-03-31 14:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_auto_20190324_1834'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='event',
            options={'ordering': ['date']},
        ),
    ]
