# from django.contrib import admin

# # Register your models here.
# from .models import BaseInsurancePackage, BodaPackages

# admin.site.register(BaseInsurancePackage)
# admin.site.register(BodaPackages)
from django.contrib import admin
from .models import Package

@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ('title', 'premiums', 'category')
    search_fields = ('title', 'category')
    list_filter = ('category',)
