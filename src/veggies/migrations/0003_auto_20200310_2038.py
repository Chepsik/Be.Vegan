# Generated by Django 2.2.7 on 2020-03-10 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('veggies', '0002_auto_20200310_2036'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='ingredients',
            field=models.ManyToManyField(default=False, through='veggies.Ingredient_List', to='veggies.Ingredient'),
        ),
    ]