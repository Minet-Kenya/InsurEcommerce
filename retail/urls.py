from django.urls import path

from . import views

urlpatterns = [
    path("", views.RetailView.as_view(), name="retail"),
    path(
        "individual_solutions/", views.individual_solutions, name="individual_solutions"
    ),
    path("corporate_product/", views.corporate_product, name="corporate_product"),
]
