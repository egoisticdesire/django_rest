from users_app.models import User
from django.core.management.base import BaseCommand

import json, os

JSON_PATH = 'users_app/jsons'


def load_from_json(file_name):
	with open(os.path.join(JSON_PATH, file_name + '.json'), 'r', encoding='utf-8') as infile:
		return json.load(infile)


class Command(BaseCommand):
	def handle(self, *args, **options):
		users = load_from_json('users')
		User.objects.all().delete()
		for user in users:
			new_user = User(**user)
			new_user.save()
