from rest_framework import serializers
from .models import Client


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
