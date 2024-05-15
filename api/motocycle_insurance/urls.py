from django.urls import path
from motocycle_insurance.views import MotorCycleCoverDetailsListCreateView, MotorCycleCoverDetailsRetrieveUpdateDestroyView, MotorVehicleDetailsListCreateView,MotorVehicleDetailsRetrieveUpdateDestroyView

urlpatterns = [
    path('motorcycle-cover-details/', MotorCycleCoverDetailsListCreateView.as_view(), name='motorcycle-cover-details-list-create'),
    path('motorcycle-cover-details/<uuid:pk>/', MotorCycleCoverDetailsRetrieveUpdateDestroyView.as_view(), name='motorcycle-cover-details-retrieve-update-destroy'),
     path('motor-cover-details/', MotorVehicleDetailsListCreateView.as_view(), name='motor-cover-details-list-create'),
    path('motor-cover-details/<uuid:pk>/', MotorVehicleDetailsRetrieveUpdateDestroyView.as_view(), name='motor-cover-details-retrieve-update-destroy'),
]