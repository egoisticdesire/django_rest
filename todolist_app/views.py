from rest_framework import status
from rest_framework.filters import SearchFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework.renderers import BrowsableAPIRenderer, JSONRenderer
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer


class ProjectPagination(PageNumberPagination):
	page_size = 10
	page_size_query_param = 'page_size'


class ToDoPagination(PageNumberPagination):
	page_size = 20
	page_size_query_param = 'page_size'


class ProjectModelViewSet(ModelViewSet):
	queryset = Project.objects.all()
	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
	serializer_class = ProjectModelSerializer
	# filterset_fields = ['title']
	filter_backends = (SearchFilter,)
	search_fields = ('title',)
	pagination_class = ProjectPagination


class ToDoModelViewSet(ModelViewSet):
	queryset = ToDo.objects.all()
	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
	serializer_class = ToDoModelSerializer
	filterset_fields = ('project', 'is_active',)
	pagination_class = ToDoPagination

	def destroy(self, request, *args, **kwargs):
		todo = self.get_object()
		todo.is_active = False
		todo.save()
		return Response(status=status.HTTP_200_OK)
