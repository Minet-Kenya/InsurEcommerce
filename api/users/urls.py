from django.urls import path
from .views import GetClients,RegisterClientView, LoginClientView,UserInformationView ,ResetPasswordView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path("clients/", GetClients.as_view(), name="clients"),
    path("auth/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path('api/register/', RegisterClientView.as_view(), name='register'),
    path('login/', LoginClientView.as_view(), name='login'),
    path('user/', UserInformationView.as_view(), name='user_info'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset-password'),
]
