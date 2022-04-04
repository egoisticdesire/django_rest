from rest_framework import mixins
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from .models import User
from .serializers import UserModelSerializer


class UserCustomViewSet(mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        GenericViewSet):
	queryset = User.objects.all()
	serializer_class = UserModelSerializer
	renderer_classes = (JSONRenderer, BrowsableAPIRenderer)
	# authentication_classes = (JWTAuthentication,)


# class UserModelViewSet(ModelViewSet):
# 	queryset = User.objects.all()
# 	serializer_class = UserModelSerializer
