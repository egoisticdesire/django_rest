from uuid import uuid4
from django.conf import settings
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class User(models.Model):
	class Meta:
		verbose_name = 'Пользователь'
		verbose_name_plural = 'Пользователи'

	# @receiver(post_save, sender=settings.AUTH_USER_MODEL)
	# def create_auth_token(sender, instance=None, created=False, **kwargs):
	# 	if created:
	# 		Token.objects.create(user=instance)

	def __str__(self):
		return self.username

	uid = models.UUIDField(
		primary_key=True,
		verbose_name='ID',
		default=uuid4,
		unique=True,
	)
	username = models.CharField(
		verbose_name='Псевдоним',
		max_length=128,
		unique=True,
	)
	firstname = models.CharField(
		verbose_name='Имя',
		max_length=128,
		blank=True,
	)
	lastname = models.CharField(
		verbose_name='Фамилия',
		max_length=128,
		blank=True,
	)
	email = models.EmailField(
		verbose_name='Эл. почта',
		max_length=128,
		unique=True,
	)
