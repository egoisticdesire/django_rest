from django.contrib.auth.models import User
from django.core.management.base import BaseCommand


class Command(BaseCommand):
	help = 'Create random user'

	def add_arguments(self, parser):
		# parser.add_argument('total', type=int, help='Number of users created')
		parser.add_argument('-a', '--admin', action='store_true', help='Create an administrator account')

	def handle(self, *args, **kwargs):
		User.objects.all().delete()
		# total = kwargs['total']
		admin = kwargs['admin']

		# for i in range(total):
		if admin:
			super_user = User.objects.create_superuser(
				username='admin',
				email='admin@admin.com',
				password='123',
			)
			self.stdout.write(self.style.SUCCESS(f'>Суперпользователь "{super_user}" успешно создан!'))
			# else:
			# 	some_user = User.objects.create_user(
			# 		username=f'some_user_{i+1}',
			# 		email=f'user_{i+1}@qwerty.com',
			# 		password='123'
			# 	)
			# 	self.stdout.write(self.style.SUCCESS(f'>Пользователь "{some_user}" успешно создан!'))
