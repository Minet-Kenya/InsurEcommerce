from django.db import models

import uuid

# Create your models here.
class BaseModel(models.Model):
    id= models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateField(auto_now_add=True)  # Automatically set to current date when object is created
    last_modified = models.DateField(auto_now=True)

class MotorCycleCoverDetails(BaseModel):
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

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.client.email
