from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import User


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
                'uid',
                'username',
                'firstname',
                'lastname',
                'email',
        )


class UserShortModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
                'uid',
                'username',
        )
