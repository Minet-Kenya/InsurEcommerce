from django import forms
from django.contrib.auth import authenticate, login
from django.core.exceptions import ValidationError

from .models import User


class BaseLoginForm(forms.Form):

    def signin(self, request):
        username = self.cleaned_data["username"]
        password = self.cleaned_data["password"]
        role = self.cleaned_data["role"]

        user = authenticate(request, username=username, password=password, role=role)

        if user is not None:
            login(request, user)
            request.session["role"] = role
        else:
            raise ValidationError("Invalid username or password credentials")


# ------------------- LOGIN FORM -------------------


class LoginForm(BaseLoginForm):

    username = forms.CharField(
        label="Your Username / Email",
        widget=forms.TextInput(
            attrs={
                "autofocus": True,
                "class": "form-control",
                "placeholder": "name@example.com",
                "id": "student_username",
            }
        ),
    )
    password = forms.CharField(
        label="Your Password",
        strip=False,
        widget=forms.PasswordInput(
            attrs={
                "autocomplete": "current-password",
                "class": "form-control",
                "placeholder": "Your password",
                "id": "student_password",
            }
        ),
    )
    role = forms.CharField(
        widget=forms.HiddenInput(
            attrs={
                "id": "student_role",
            }
        ),
        initial=User.Role.CLIENT,
    )
