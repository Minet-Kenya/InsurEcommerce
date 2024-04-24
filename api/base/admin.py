from django.contrib import admin
from .models import Company,Document,Transactions


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

@admin.register(Transactions)
class TransactionsAdmin(admin.ModelAdmin):
    list_display=["__str__","amount","payment_status","payment_number"]
    search_fields = ("__str__","client","payment_number")
