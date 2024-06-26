# Generated by Django 5.0.4 on 2024-04-20 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cloth_app', '0006_delete_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='StylePreference',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField(blank=True, null=True)),
                ('style', models.CharField(max_length=50)),
                ('other_style', models.CharField(blank=True, max_length=100)),
                ('occasion', models.CharField(max_length=50)),
                ('other_occasion', models.CharField(blank=True, max_length=100)),
            ],
        ),
    ]
