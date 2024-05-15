from rest_framework import serializers
from motocycle_insurance.models import MotorCycleCoverDetails,MotorVehicleDetails

class MotorCycleCoverDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MotorCycleCoverDetails
        fields = '__all__'

class MotorVehicleDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MotorVehicleDetails
        fields = '__all__'