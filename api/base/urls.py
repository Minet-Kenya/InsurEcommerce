from django.urls import path
from .views import GetCompany

urlpatterns = [
    path("company/", GetCompany.as_view(), name="company"),
]
