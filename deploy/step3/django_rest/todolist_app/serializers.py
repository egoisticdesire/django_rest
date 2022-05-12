from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer

from users_app.serializers import UserModelSerializer
from .models import Project, ToDo


class ProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = (
                'id',
                'title',
                'link',
                'users',
        )


class ToDoModelSerializer(ModelSerializer):
    project = ProjectModelSerializer()

    class Meta:
        model = ToDo
        fields = (
                'id',
                'project',
                'title',
                'body',
                'created_at',
                'updated_at',
                'user',
                'is_active',
        )


class ProjectModelSerializerBase(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializerBase(ModelSerializer):
    class Meta:
        model = ToDo
        fields = '__all__'
