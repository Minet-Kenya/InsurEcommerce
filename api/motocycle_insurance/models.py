from django.db import models

import uuid

# Create your models here.
class BaseModel(models.Model):
    id= models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateField(auto_now_add=True)  # Automatically set to current date when object is created
    last_modified = models.DateField(auto_now=True)

class MotorCycleCoverDetails(BaseModel):
    POLICY_STATUS=[
        ('Pending','Pending'),
        ('Complete','Complete'),
    ]

    client= models.ForeignKey("users.Client",on_delete=models.SET_NULL,null=True)
    registration_no = models.CharField(max_length=100,unique=True)
    log_book_no = models.CharField(max_length=100,unique=True)
    make = models.CharField(max_length=100)
    manufacture_year = models.DateField()
    engine_cc = models.CharField(max_length=100)
    policy_details = models.JSONField(blank=True, null=True)
    motorcycle_and_rider_details = models.JSONField(blank=True, null=True)
    payment_details = models.ForeignKey("base.Transactions",on_delete=models.SET_NULL,null=True)
    package_details = models.ForeignKey('insurance_packages.Package',on_delete=models.SET_NULL,null=True)
    status = models.CharField(max_length=25, choices=POLICY_STATUS,default='Pending' )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.client.email



class MotorVehicleDetails(BaseModel):
    POLICY_STATUS=[
        ('Pending','Pending'),
        ('Complete','Complete'),
    ]
    client= models.ForeignKey("users.Client",on_delete=models.SET_NULL,null=True)
    registration_no = models.CharField(max_length=100,unique=True)
    make = models.CharField(max_length=100)
    manufacture_year = models.CharField(max_length=100)
    policy_type = models.CharField(max_length=100)
    policy_period= models.DateField()
    car_value = models.CharField(max_length=100)
    engine_cc = models.CharField(max_length=100)
    engine_no = models.CharField(max_length=100)
    vehicle_use=models.CharField(max_length=100)
    payment_details = models.ForeignKey("base.Transactions",on_delete=models.SET_NULL,null=True)
    package_details = models.CharField(max_length=100)
    policy_details = models.JSONField(blank=True, null=True)
    # package_details = models.ForeignKey('insurance_packages.Package',on_delete=models.SET_NULL,null=True)
    status = models.CharField(max_length=25, choices=POLICY_STATUS,default='Pending' )


    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.client.email


class EducationPolicy(BaseModel):
    client= models.ForeignKey("users.Client",on_delete=models.SET_NULL,null=True)
    full_names=models.CharField(max_length=100)
    phone_number=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    plan_type=models.CharField(max_length=100)
    addational_info = models.CharField(max_length=500)

    class Meta:
        ordering = ['-created_at']

    # def __str__(self):
    #     return self.client.email


class OtherPolicies(BaseModel):
    POLICY_TYPE=[
        ('Education Policy','Education Policy'),
        ('Home Insurance','Home Insurance'),
        ('Medical Insurance','Medical Insurance'),
        ('Individual Life','Individual Life'),
        ('Travel Insurance','Travel Insurance'),
        ('Golfers Insurance','Golfers Insurance'),
        ('Personal Accident','Personal Accident'),
    ]

    client = models.ForeignKey("users.Client",on_delete=models.SET_NULL,null=True)
    policy_details = models.JSONField(blank=True, null=True)
    policy_type = models.CharField(max_length=25, choices=POLICY_TYPE,default='' )
    infomation_details = models.JSONField(blank=True, null=True)

    class Meta:
        ordering = ['created_at']

    # def __str__(self):
    #     return self.client.email
