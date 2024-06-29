from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate
from .models import Client


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = (
            "id",
            "role",
            "username",
            "first_name",
            "last_name",
            "image",
        )


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token["username"] = user.username
        token["role"] = user.role
        return token

    """
    Override the validate method to add validation for the role field as well
    """
    role = serializers.CharField(write_only=True)

    def validate(self, attrs):
        data = {}

        username = attrs.get("username")
        password = attrs.get("password")
        role = attrs.get("role")

        user = authenticate(username=username, password=password, role=role)

        # Custom claims
        refresh = self.get_token(user)

        data["refresh"] = str(refresh)
        data["access"] = str(refresh.access_token)

        return data
