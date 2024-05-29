from rest_framework import serializers
from motocycle_insurance.models import MotorCycleCoverDetails,MotorVehicleDetails,EducationPolicy

class MotorCycleCoverDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MotorCycleCoverDetails
        fields = '__all__'

class MotorVehicleDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MotorVehicleDetails
        fields = '__all__'


class EducationPolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationPolicy
        fields = '__all__'