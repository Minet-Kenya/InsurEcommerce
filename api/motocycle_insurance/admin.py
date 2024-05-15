from django.contrib import admin
from motocycle_insurance.models import MotorCycleCoverDetails, MotorVehicleDetails


# Register your models here.
@admin.register(MotorCycleCoverDetails)
class MotorcycleInsuranceAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'registration_no', 'log_book_no',"manufacture_year")
    search_fields = ("__str__",'registration_no', 'log_book_no')
    list_filter = ('registration_no', 'log_book_no')

@admin.register(MotorVehicleDetails)
class MotorcycleInsuranceAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'registration_no', 'policy_type',"manufacture_year")
    search_fields = ("__str__",'registration_no', 'policy_type')
    list_filter = ('registration_no', 'policy_type')