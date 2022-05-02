from django.contrib import admin

from users_app.models import User


class UserAdmin(admin.ModelAdmin):
	list_display = ('uid', 'username', 'firstname', 'lastname', 'email')
	list_display_links = ('uid', 'username',)
	search_fields = ('username',)
	readonly_fields = ('uid',)


admin.site.register(User, UserAdmin)
