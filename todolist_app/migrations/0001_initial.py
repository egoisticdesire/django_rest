# Generated by Django 4.0.2 on 2022-03-29 17:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users_app', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Название проекта')),
                ('link', models.URLField(blank=True, max_length=1024, verbose_name='Ссылка на репозиторий')),
                ('users', models.ManyToManyField(to='users_app.User', verbose_name='Участники проекта')),
            ],
        ),
        migrations.CreateModel(
            name='ToDo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='Заголовок заметки', max_length=128, verbose_name='Название заметки')),
                ('body', models.CharField(blank=True, max_length=1024, verbose_name='Текст заметки')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Дата обновления')),
                ('is_active', models.BooleanField(default=True, verbose_name='Активна/Не активна')),
                ('project', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='todolist_app.project', verbose_name='Проект')),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.PROTECT, to='users_app.user', verbose_name='Создатель заметки')),
            ],
        ),
    ]
