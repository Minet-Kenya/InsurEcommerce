from django.urls import path

from .views import SendMail

urlpatterns = [
    path("send-mail/", SendMail.as_view()),
]
