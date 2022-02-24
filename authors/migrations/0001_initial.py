# Generated by Django 4.0.2 on 2022-02-21 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=64, verbose_name='Псевдоним')),
                ('firstname', models.CharField(blank=True, max_length=64, verbose_name='Имя')),
                ('lastname', models.CharField(blank=True, max_length=64, verbose_name='Фамилия')),
                ('email', models.EmailField(max_length=64, unique=True, verbose_name='Эл. почта')),
            ],
        ),
    ]
