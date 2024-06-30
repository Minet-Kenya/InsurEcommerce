from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate
from .models import Client
import requests
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
import logging

logger = logging.getLogger(__name__)


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = (
            "id",
            "role",
            "username",
            "email",
            "name",
            "password",
            "image",
            "personal_info"
        )
        extra_kwargs = {'password': {'write_only': True}}

    def validate_email(self, value):
        """
        Validate that the email is in a valid format.
        """
        try:
            validate_email(value)
        except ValidationError:
            raise serializers.ValidationError("Invalid email format.")
        return value

    def create(self, validated_data):
        # Ensure the password is set using the set_password method
        user = Client.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            name=validated_data['name'],
            krapin=validated_data['krapin'],
            idNumber=validated_data['idNumber'],
            dob=validated_data['dob'],
            address=validated_data['address'],
            # role=validated_data['role']
        )

        print(user)

        # external_url = "https://ussd.minet.co.ke/minetapi/portals/create_account.php"

        # data = {
        # "IDNo": client.name,
        # "NAMES": client.address,
        # "KRAPIN": client.krapin,
        # "EMAILADD": client.email,
        # "POSTALADD":client.address,
        # "PHONENO": client.username,
        # "DOB": client.dob,
        # "PASSWORD":client.password
        # }
        # response = requests.post(external_url, data=data)

        # print(data)
        return user




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

        response = requests.get(f'https://ussd.minet.co.ke/minetapi/portals/login.php?User={username}&pass={password}')

        if response.status_code != 200:
            raise serializers.ValidationError("Something wrong happened. Try again later")

        try:
            verification_data = response.json()
        except ValueError:
            raise serializers.ValidationError("Something wrong happened. Try again later")

        if verification_data.get('status') != 0:
            raise serializers.ValidationError("User or password does not exist. Register")

        user_profile = requests.get(f'https://ussd.minet.co.ke/minetapi/portals/profile.php?user={username}')

        try:
            user_profile_data = user_profile.json()
        except ValueError:
            raise serializers.ValidationError("Something wrong happened. Try again later")

        try:
            user = Client.objects.get(username=username)
            print(user)
        except Client.DoesNotExist:
            user = Client(username=username, password=password, name=user_profile_data['full_name'],
                        email=user_profile_data['email'], personal_info=user_profile_data)
            user.set_password(password)
            user.save()


        if user is None:
            raise serializers.ValidationError("Invalid credentials.")

        # Custom claims
        refresh = self.get_token(user)

        data["refresh"] = str(refresh)
        data["access"] = str(refresh.access_token)

        return data


class ResetPasswordSerializer(serializers.Serializer):
    phone_number = serializers.CharField()

    def validate_phone_number(self, value):
        # Check if the client exists in the database (Client model)
        # Replace this with your own logic to check if the phone number exists
        client_exists = Client.objects.filter(username=value).exists()

        external_response = requests.get(f'https://ussd.minet.co.ke/minetapi/portals/profile.php?user={value}')
        external_exists = external_response.status_code == 200 and external_response.json().get('exists', False)

        if not client_exists and not external_exists:
            raise serializers.ValidationError("Client with this phone number does not exist in either system.")

        return value

    def reset_password(self, validated_data):
        phone_number = validated_data['phone_number']

        # Make HTTP request to reset password
        endpoint = 'https://ussd.minet.co.ke/minetapi/portals/ResetPassword.php'
        params = {'User': phone_number}
        response = requests.get(endpoint, params=params)
        data = response.json()
        print(data)

        # Check response status and handle accordingly
        if response.status_code == 200:
            return {'message': 'Password reset successful.'}
        else:
            # Handle error
            return {'message': 'Failed to reset password.'}
