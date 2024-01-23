from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("privacy_policy/", views.privacy_policy, name="privacy_policy"),
]
