from rest_framework import serializers
from motocycle_insurance.models import MotorCycleCoverDetails

class MotorCycleCoverDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MotorCycleCoverDetails
        fields = '__all__'
