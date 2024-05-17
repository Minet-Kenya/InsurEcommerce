from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework import generics, permissions
from .models import MotorCycleCoverDetails, MotorVehicleDetails
from motocycle_insurance.serializers import MotorCycleCoverDetailsSerializer,MotorVehicleDetailsSerializer
from rest_framework.generics import get_object_or_404
from .utilities import send_policy_email
from rest_framework.response import Response

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

class SendPolicyEmailAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, policy_type, policy_id):
        user = request.user

        # Retrieve the policy instance based on the policy_type
        if policy_type == 'motorcycle':
            policy = get_object_or_404(MotorCycleCoverDetails, id=policy_id, client=user)
        elif policy_type == 'motor':
            policy = get_object_or_404(MotorVehicleDetails, id=policy_id, client=user)
        else:
            return Response({'error': 'Invalid policy type'}, status=400)

        # Send the email
        send_policy_email(user, policy, policy_type.capitalize())

        return Response({'message': 'Email sent successfully'}, status=200)