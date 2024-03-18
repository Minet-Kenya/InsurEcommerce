from django.contrib import admin

from .models import Company


@admin.register(Company)
class ContactAdmin(admin.ModelAdmin):
    def has_add_permission(self, request, obj=None):
        if Company.objects.count() > 0:
            return False
        else:
            return True
