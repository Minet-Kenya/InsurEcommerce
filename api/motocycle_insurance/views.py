from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions
from .models import MotorCycleCoverDetails, MotorVehicleDetails
from motocycle_insurance.serializers import MotorCycleCoverDetailsSerializer,MotorVehicleDetailsSerializer

class MotorCycleCoverDetailsListCreateView(generics.ListCreateAPIView):
    queryset = MotorCycleCoverDetails.objects.all()
    serializer_class = MotorCycleCoverDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(client=self.request.user)

class MotorCycleCoverDetailsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MotorCycleCoverDetails.objects.all()
    serializer_class = MotorCycleCoverDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(client=self.request.user)



class MotorVehicleDetailsListCreateView(generics.ListCreateAPIView):
    queryset = MotorVehicleDetails.objects.all()
    serializer_class = MotorVehicleDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(client=self.request.user)

class MotorVehicleDetailsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MotorVehicleDetails.objects.all()
    serializer_class = MotorVehicleDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(client=self.request.user)
