import graphene
from graphene_django import DjangoObjectType
from users_app.models import User
from todolist_app.models import ToDo, Project


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)
    all_todos = graphene.List(ToDoType)
    all_projects = graphene.List(ProjectType)
    user_by_id = graphene.Field(UserType, id=graphene.UUID(required=True))
    projects_by_user = graphene.List(ProjectType, title=graphene.String(required=False))

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_all_todos(root, info):
        return ToDo.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_user_by_id(self, info, id):
        try:
            return User.objects.get(uid=id)
        except User.DoesNotExist:
            return None

    def resolve_projects_by_user(self, info, title=None):
        projects = Project.objects.all()
        if title:
            projects = projects.filter(users__username=title)
        return projects


class UserMutation(graphene.Mutation):
    class Arguments:
        uid = graphene.UUID()
        username = graphene.String(required=True)

    user = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, uid, username):
        user = User.objects.get(pk=uid)
        user.username = username
        user.save()
        return UserMutation(user=user)


class Mutation(graphene.ObjectType):
    update_user = UserMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
