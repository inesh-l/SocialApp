from django.contrib import admin
from . import models
from django.contrib.auth.models import User


class ProfileInline(admin.StackedInline):
    model = models.Profile


class UserAdmin(admin.ModelAdmin):
    model = User
    fields = ["username"]
    inlines = [ProfileInline]


admin.site.unregister(User)
admin.site.register(User, UserAdmin)
