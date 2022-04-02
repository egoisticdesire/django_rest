from rest_framework import mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.response import Response
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
	permission_classes = (IsAuthenticatedOrReadOnly,)
	authentication_classes = (TokenAuthentication,)

	# def get(self, request):
	# 	context = {
	# 		'user': request.user,
	# 		'auth': request.auth,
	# 	}
	# 	return Response(context)


# class UserModelViewSet(ModelViewSet):
# 	queryset = User.objects.all()
# 	serializer_class = UserModelSerializer
