from django.urls import path
from .views import GetCompany,DocumentUploadView,TransactionListCreateView

urlpatterns = [
    path("company/", GetCompany.as_view(), name="company"),
    path('file-upload/', DocumentUploadView.as_view() , name='file-upload'),
     path('transactions/', TransactionListCreateView.as_view(), name='transaction-list-create'),
]
