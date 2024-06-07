from rest_framework import serializers
from motocycle_insurance.models import MotorCycleCoverDetails,MotorVehicleDetails,EducationPolicy,OtherPolicies

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

class OtherPoliciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = OtherPolicies
        fields = '__all__'