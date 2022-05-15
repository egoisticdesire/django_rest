import json
from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from .views import UserCustomViewSet, UserModelViewSet
from .models import User as MyUser
from todolist_app.models import Project, ToDo


class TestUserViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        view = UserCustomViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post('/api/users/', {'username': 'Pushkin', 'email': 'test@test.com'})
        view = UserModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_admin(self):
        factory = APIRequestFactory()
        request = factory.post('/api/users/', {'username': 'Pushkin', 'email': 'test@test.com'}, format='json')
        admin = User.objects.create_superuser('admin', 'admin@admin.com', '123')
        force_authenticate(request, admin)
        view = UserModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_detail(self):
        user = MyUser.objects.create(username='Pushkin')
        client = APIClient()
        response = client.get(f'/api/users/{user.uid}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_guest(self):
        user = MyUser.objects.create(username='Pushkin')
        client = APIClient()
        response = client.put(f'/api/users/{user.uid}/', {'username': 'Grin'})
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_edit_admin(self):
        user = MyUser.objects.create(username='Pushkin', email='test@test.com')
        User.objects.create_superuser('admin', 'admin@admin.com', '123')
        client = APIClient()
        client.login(username='admin', password='123')
        response = client.put(f'/api/users/{user.uid}/', {'username': 'Grin', 'email': 'test@test.com'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        new_user = MyUser.objects.get(uid=user.uid)
        self.assertEqual(new_user.username, 'Grin')
        self.assertEqual(new_user.email, 'test@test.com')
        client.logout()


class TestMath(APISimpleTestCase):
    def test_sqrt(self):
        import math
        self.assertEqual(math.sqrt(4), 2)
        self.assertNotEqual(math.sqrt(5), 2)


class TestProjectViewSet(APITestCase):
    def test_get_list(self):
        response = self.client.get('/api/todos/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # не работает!
    def test_edit_admin(self):
        User.objects.create_superuser('admin', 'admin@admin.com', '123')

        user = MyUser.objects.create(username='Pushkin', email='test@test.com')
        project = Project.objects.create(title='proj_1')
        todo = ToDo.objects.create(title='test_todo_1', project=project, user=user)
        self.client.login(username='admin', password='123')

        response = self.client.put(f'/api/todos/{todo.id}/',
                                   {'title': 'test_todo_2', 'project': todo.project.id, 'user': user.uid})

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        todo = ToDo.objects.get(id=todo.id)
        self.assertEqual(todo.title, 'test_todo_2')
        self.assertEqual(todo.project.id, project.id)

    # не работает!
    def test_edit_mixer(self):
        User.objects.create_superuser('admin', 'admin@admin.com', '123')
        todo = mixer.blend(ToDo)
        self.client.login(username='admin', password='123')
        response = self.client.put(f'/api/todos/{todo.id}/',
                                   {'title': 'test_todo_2', 'project': todo.project.id, 'user': todo.user.uid})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        todo = ToDo.objects.get(id=todo.id)
        self.assertEqual(todo.title, 'test_todo_2')

    def test_get_detail(self):
        todo = mixer.blend(ToDo, title='123')
        response = self.client.get(f'/api/todos/{todo.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_todo = json.loads(response.content)
        self.assertEqual(response_todo['title'], '123')

    def test_get_detail_user(self):
        todo = mixer.blend(ToDo, project__title='poopa')
        response = self.client.get(f'/api/todos/{todo.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_todo = json.loads(response.content)
        self.assertEqual(response_todo['project']['title'], 'poopa')
