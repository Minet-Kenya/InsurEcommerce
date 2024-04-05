from django.urls import path
from .views import CompanyInfo, SendMail, Logout, ClientList, CustomTokenObtainPairView

urlpatterns = [
    path("company/", CompanyInfo.as_view()),
    path("mail/", SendMail.as_view()),
    path("login/", CustomTokenObtainPairView.as_view(), name="login"),
    path("logout/", Logout.as_view(), name="logout"),
    path("clients/", ClientList.as_view()),
]
