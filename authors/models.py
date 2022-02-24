from django.db import models


class Author(models.Model):
	username = models.CharField(
		verbose_name='Псевдоним',
		max_length=64,
	)
	firstname = models.CharField(
		verbose_name='Имя',
		max_length=64,
		blank=True,
	)
	lastname = models.CharField(
		verbose_name='Фамилия',
		max_length=64,
		blank=True,
	)
	email = models.EmailField(
		verbose_name='Эл. почта',
		max_length=64,
		unique=True,
	)
