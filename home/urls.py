from django.urls import path

from . import views

urlpatterns = [
    path("landing/", views.landing, name="landing"),
    path("privacy_policy/", views.privacy_policy, name="privacy_policy"),
]
