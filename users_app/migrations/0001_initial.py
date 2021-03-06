# Generated by Django 4.0.2 on 2022-03-28 16:07

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('uid', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=128, verbose_name='Псевдоним')),
                ('firstname', models.CharField(blank=True, max_length=128, verbose_name='Имя')),
                ('lastname', models.CharField(blank=True, max_length=128, verbose_name='Фамилия')),
                ('email', models.EmailField(max_length=128, unique=True, verbose_name='Эл. почта')),
            ],
        ),
    ]
