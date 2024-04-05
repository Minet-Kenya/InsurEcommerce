from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model


class AuthBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, role=None, **kwargs):
        UserModel = get_user_model()

        try:
            user = UserModel.objects.get(username=username, role=role)
        except UserModel.DoesNotExist:
            try:
                user = UserModel.objects.get(username=username, role="SUPERUSER")
            except UserModel.DoesNotExist:
                return None

        if user.check_password(password):
            return user
