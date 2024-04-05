from django.urls import path
from .views import ContactUs

urlpatterns = [
    path("contact/", ContactUs.as_view(), name="contact"),
]
