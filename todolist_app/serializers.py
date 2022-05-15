from rest_framework.serializers import HyperlinkedModelSerializer

from users_app.serializers import UserModelSerializer
from .models import Project, ToDo


class ProjectModelSerializer(HyperlinkedModelSerializer):
	users = UserModelSerializer

	class Meta:
		model = Project
		fields = (
			'title',
			'link',
			'users',
		)


class ToDoModelSerializer(HyperlinkedModelSerializer):
	project = ProjectModelSerializer()

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
