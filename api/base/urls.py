from django.urls import path
from .views import GetCompany,DocumentUploadView

urlpatterns = [
    path("company/", GetCompany.as_view(), name="company"),
    path('file-upload/', DocumentUploadView.as_view() , name='file-upload'),
]
