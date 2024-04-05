from rest_framework import serializers
from .models import Company, Client


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"


class BaseUserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "role",
            "username",
            "first_name",
            "last_name",
            "image",
        )


class ClientSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        model = Client
