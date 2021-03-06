from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Project, ToDo


class ProjectModelSerializer(HyperlinkedModelSerializer):
	class Meta:
		model = Project
		fields = (
			'title',
			'link',
			'users',
		)


class ToDoModelSerializer(HyperlinkedModelSerializer):
	class Meta:
		model = ToDo
		fields = (
			'project',
			'title',
			'body',
			'created_at',
			'updated_at',
			'user',
			'is_active',
		)