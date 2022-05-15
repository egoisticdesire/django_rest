from rest_framework.serializers import HyperlinkedModelSerializer
from .models import User


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = (
                'uid',
                'username',
                'firstname',
                'lastname',
                'email',
        )


class UserShortModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = (
                'uid',
                'username',
        )
