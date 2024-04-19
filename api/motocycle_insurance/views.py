from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions
from motocycle_insurance.models import MotorCycleCoverDetails
from motocycle_insurance.serializers import MotorCycleCoverDetailsSerializer

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
