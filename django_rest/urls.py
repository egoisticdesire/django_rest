from os.path import basename
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter
from todolist_app.views import ProjectModelViewSet, ToDoModelViewSet
from users_app.views import UserCustomViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
        openapi.Info(
                title='Todo',
                default_version='1',
                description='Documentation to out Todo',
                contact=openapi.Contact(email='admin@admin.com'),
                license=openapi.License(name='MIT License'),
        ),
        # public=True,
        # permission_classes=[permissions.AllowAny],
)

router = DefaultRouter()
# router.register('users', UserModelViewSet)
router.register('users', UserCustomViewSet)
router.register('projects', ProjectModelViewSet)
router.register('todos', ToDoModelViewSet)

urlpatterns = [
        path('admin/', admin.site.urls),
        path('api-auth/', include('rest_framework.urls')),
        path('api/', include(router.urls)),
        # Token
        path('api/auth/', obtain_auth_token, name='api-token-auth'),
        # JWT
        path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
        path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
        path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
        # UrlPathVersioning
        # re_path(r'^api/(?P<version>\d)/users/$', UserCustomViewSet.as_view({'get': 'list'})),
        # NamespaceVersioning // В параметре  namespace  мы  указываем  версию  API.
        # path('api/users/1/', include('users_app.urls', namespace='1')),
        # path('api/users/2/', include('users_app.urls', namespace='2')),

        re_path(r'^swagger(?P<format>\.json|\.yaml)$',
                schema_view.without_ui(cache_timeout=0), name='schema-json'),
        path('swagger/', schema_view.with_ui('swagger', cache_timeout=0),
             name='schema-swagger-ui'),
        path('redoc/', schema_view.with_ui('redoc', cache_timeout=0),
             name='schema-redoc'),

]
