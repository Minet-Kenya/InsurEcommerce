from django.urls import path
from motocycle_insurance.views import MotorCycleCoverDetailsListCreateView, MotorCycleCoverDetailsRetrieveUpdateDestroyView

urlpatterns = [
    path('motorcycle-cover-details/', MotorCycleCoverDetailsListCreateView.as_view(), name='motorcycle-cover-details-list-create'),
    path('motorcycle-cover-details/<uuid:pk>/', MotorCycleCoverDetailsRetrieveUpdateDestroyView.as_view(), name='motorcycle-cover-details-retrieve-update-destroy'),
]