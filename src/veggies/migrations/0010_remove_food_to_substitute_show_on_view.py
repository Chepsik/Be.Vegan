# Generated by Django 2.2.7 on 2020-04-01 11:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('veggies', '0009_auto_20200401_1107'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='food_to_substitute',
            name='show_on_view',
        ),
    ]