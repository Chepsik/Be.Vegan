# Generated by Django 2.2.7 on 2020-04-01 11:07

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('veggies', '0008_auto_20200311_1505'),
    ]

    operations = [
        migrations.AddField(
            model_name='food_substitute',
            name='show_on_view',
            field=models.BooleanField(default=0, verbose_name='show_or_not'),
        ),
        migrations.AddField(
            model_name='food_to_substitute',
            name='show_on_view',
            field=models.BooleanField(default=0, verbose_name='show_or_not'),
        ),
        migrations.AlterField(
            model_name='main_post',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to='ctig8ylotxru/public/images/main_posts', verbose_name='foto'),
        ),
        migrations.AlterField(
            model_name='rating_restaurant',
            name='rating',
            field=models.DecimalField(decimal_places=2, max_digits=4, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)], verbose_name='rating'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='recipe_foto',
            field=models.ImageField(null=True, upload_to='ctig8ylotxru/public/images/recipe_fotos', verbose_name='recipe_foto'),
        ),
        migrations.AlterField(
            model_name='reply_post',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to='ctig8ylotxru/public/images/post_replies', verbose_name='foto'),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to='ctig8ylotxru/public/images/restaurants', verbose_name='foto'),
        ),
    ]
