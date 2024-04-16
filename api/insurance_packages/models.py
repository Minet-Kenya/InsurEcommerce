from django.db import models
import uuid

class Package(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    premiums = models.CharField(max_length=255)
    features = models.JSONField()
    category = models.CharField(max_length=255, default='default') # Add this line
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.title



# from django.db import models

# # Create your models here.
# # insurance_packages/models.py


# class BaseInsurancePackage(models.Model):
#     title = models.CharField(max_length=100)
#     premiums = models.CharField(max_length=100)
#     features = models.JSONField()

#     class Meta:
#         abstract = True

# class BodaPackages(BaseInsurancePackage):
#     pass

# class RaidaSureBodaPackages(BaseInsurancePackage):
#     pass

# # Add more package models as needed
