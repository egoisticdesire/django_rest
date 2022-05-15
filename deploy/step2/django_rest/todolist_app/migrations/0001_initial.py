# Generated by Django 4.0.4 on 2022-04-23 19:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Название проекта')),
                ('link', models.URLField(blank=True, max_length=1024, verbose_name='Ссылка на репозиторий')),
                ('users', models.ManyToManyField(to='users_app.user', verbose_name='Участники проекта')),
            ],
            options={
                'verbose_name': 'Проект',
                'verbose_name_plural': 'Проекты',
            },
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
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='todolist_app.project', verbose_name='Проект')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='users_app.user', verbose_name='Создатель заметки')),
            ],
            options={
                'verbose_name': 'Заметка',
                'verbose_name_plural': 'Заметки',
            },
        ),
    ]