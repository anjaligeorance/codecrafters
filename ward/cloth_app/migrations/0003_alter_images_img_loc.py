# Generated by Django 5.0.4 on 2024-04-20 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cloth_app', '0002_images_img_loc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='images',
            name='img_loc',
            field=models.CharField(max_length=100),
        ),
    ]