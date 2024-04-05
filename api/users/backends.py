from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from rest_framework.serializers import ValidationError


class AuthBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, role=None, **kwargs):
        UserModel = get_user_model()

        if username and password and role:
            try:
                user = UserModel.objects.get(username=username, role=role)
            except UserModel.DoesNotExist:
                try:
                    user = UserModel.objects.get(username=username, role="SUPERUSER")
                except UserModel.DoesNotExist:
                    raise ValidationError(
                        "No active account found with the given credentials"
                    )
            if not user.check_password(password):
                raise ValidationError("Incorrect password")
        else:
            raise ValidationError('Must include "username", "password", and "role".')

        return user
