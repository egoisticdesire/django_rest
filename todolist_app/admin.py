from django.contrib import admin

from todolist_app.models import Project, ToDo


class ProjectAdmin(admin.ModelAdmin):
	list_display = ('title', 'link',)
	list_display_links = ('title',)
	search_fields = ('title',)


class ToDoAdmin(admin.ModelAdmin):
	list_display = ('title', 'project', 'created_at', 'is_active')
	list_display_links = ('title',)
	search_fields = ('title',)
	ordering = ('-created_at',)


admin.site.register(Project, ProjectAdmin)
admin.site.register(ToDo, ToDoAdmin)
