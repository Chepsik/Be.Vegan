# Generated by Django 2.2.7 on 2020-03-06 09:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('veggies', '0012_auto_20200306_0949'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='post_reply',
            options={'managed': False},
        ),
    ]
