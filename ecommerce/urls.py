from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path(
        "individual_solutions/", views.individual_solutions, name="individual_solutions"
    ),
    path("corporate_product/", views.corporate_product, name="corporate_product"),
    path("login/", views.login, name="login"),
    path("register/", views.register, name="register"),
    path("contact/", views.contact, name="contact"),
]
