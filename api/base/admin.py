from django.contrib import admin
from .models import Company,Document


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    def has_add_permission(self, request, obj=None):
        if Company.objects.count() > 0:
            return False
        else:
            return True

@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display=["__str__","name"]
    search_fields = ("__str__","name")
