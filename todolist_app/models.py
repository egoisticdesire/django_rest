from django.db import models

from users_app.models import User


class Project(models.Model):
	title = models.CharField(
		verbose_name='Название проекта',
		max_length=128,
	)
	link = models.URLField(
		verbose_name='Ссылка на репозиторий',
		max_length=1024,
		blank=True,
	)
	users = models.ManyToManyField(
		User,
		verbose_name='Участники проекта',
	)

	def __str__(self):
		return self.title


class ToDo(models.Model):
	project = models.OneToOneField(
		Project,
		verbose_name='Проект',
		on_delete=models.CASCADE,
	)
	title = models.CharField(
		verbose_name='Название заметки',
		max_length=128,
		default='Заголовок заметки'
	)
	body = models.CharField(
		verbose_name='Текст заметки',
		max_length=1024,
		blank=True,
	)
	created_at = models.DateTimeField(
		verbose_name='Дата создания',
		auto_now_add=True,
	)
	updated_at = models.DateTimeField(
		verbose_name='Дата обновления',
		auto_now=True,
	)
	user = models.OneToOneField(
		User,
		verbose_name='Создатель заметки',
		on_delete=models.PROTECT,
		null=True,
	)
	is_active = models.BooleanField(
		verbose_name='Активна/Не активна',
		default=True,
	)

	def __str__(self):
		return self.project
