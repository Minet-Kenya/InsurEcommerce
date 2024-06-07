from django.contrib import admin
from motocycle_insurance.models import MotorCycleCoverDetails, MotorVehicleDetails,EducationPolicy,OtherPolicies


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

@admin.register(EducationPolicy)
class EducationPolicyAdmin(admin.ModelAdmin):
    list_display=('__str__','full_names','plan_type')


@admin.register(OtherPolicies)
class OtherPoliciesAdmin(admin.ModelAdmin):
    list_display=['policy_type','client']
