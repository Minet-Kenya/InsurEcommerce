from django import forms
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.contrib.auth import authenticate, login
from django.core.exceptions import ValidationError
from .models import User


class ContactForm(forms.Form):
    name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(),
    )
    email = forms.EmailField(
        widget=forms.EmailInput(),
    )
    subject = forms.CharField(
        max_length=200,
        widget=forms.TextInput(),
    )
    message = forms.CharField(
        widget=forms.Textarea(),
    )
    recipient_email = forms.EmailField(
        widget=forms.HiddenInput(),
    )

    def send_email(self, request):
        name = self.cleaned_data["name"]
        email = self.cleaned_data["email"]
        subject = self.cleaned_data["subject"]
        message = self.cleaned_data["message"]
        recipient_email = self.cleaned_data["recipient_email"]

        email_context = {
            "name": name,
            "email": email,
            "subject": subject,
            "message": message,
        }

        text_content = render_to_string("home/mail.txt", email_context)
        html_content = render_to_string("home/mail.html", email_context)

        msg = EmailMultiAlternatives(
            subject,
            text_content,
            settings.EMAIL_HOST_USER,
            [recipient_email],
        )
        msg.attach_alternative(html_content, "text/html")
        msg.send()


class LoginForm(forms.Form):

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
