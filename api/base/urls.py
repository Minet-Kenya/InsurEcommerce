from django.urls import path

from .views import CompanyInfo

urlpatterns = [
    path("company-info/", CompanyInfo.as_view()),
]
