from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from django.utils.crypto import get_random_string


class Command(BaseCommand):
	help = 'Create random user'

	def add_arguments(self, parser):
		parser.add_argument('total', type=int, help='Number of users created')
		parser.add_argument('-a', '--admin', action='store_true', help='Create an administrator account')

	def handle(self, *args, **kwargs):
		total = kwargs['total']
		admin = kwargs['admin']

		for _ in range(total):
			username = f'{get_random_string(10)}'
			if admin:
				super_user = User.objects.create_superuser(
					username=input('Enter username: '),
					email=input('Enter email: '),
					password=input('Enter password: '),
				)
				self.stdout.write(self.style.SUCCESS(f'>Суперпользователь "{super_user}" успешно создан!'))
			else:
				some_user = User.objects.create_user(
					username=f'some_user_{username}',
					email=f'user_{username}@qwerty.com',
					password='123'
				)
				self.stdout.write(self.style.SUCCESS(f'>Пользователь "{some_user}" успешно создан!'))
