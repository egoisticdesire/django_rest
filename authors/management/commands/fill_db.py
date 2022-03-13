from authors.models import Author
from django.core.management.base import BaseCommand

import json, os

JSON_PATH = 'authors/jsons'


def load_from_json(file_name):
	with open(os.path.join(JSON_PATH, file_name + '.json'), 'r', encoding='utf-8') as infile:
		return json.load(infile)


class Command(BaseCommand):
	def handle(self, *args, **options):
		authors = load_from_json('authors')
		Author.objects.all().delete()
		for author in authors:
			new_author = Author(**author)
			new_author.save()
