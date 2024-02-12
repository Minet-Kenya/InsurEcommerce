from django import forms
from django.contrib.auth.forms import AuthenticationForm, UsernameField


class ContactForm(forms.Form):
    name = forms.CharField(
        label="Your Name",
        max_length=100,
        widget=forms.TextInput(
            attrs={"class": "form-control", "placeholder": "Your Name"}
        ),
    )
    email = forms.EmailField(
        label="Your Email",
        widget=forms.EmailInput(
            attrs={"class": "form-control", "placeholder": "Your Email"}
        ),
    )
    subject = forms.CharField(
        label="Subject",
        max_length=200,
        widget=forms.TextInput(
            attrs={"class": "form-control", "placeholder": "Subject"}
        ),
    )
    message = forms.CharField(
        label="Message",
        widget=forms.Textarea(
            attrs={"class": "form-control", "rows": "5", "placeholder": "Message"}
        ),
    )


class LoginForm(AuthenticationForm):
    username = UsernameField(
        widget=forms.EmailInput(
            attrs={
                "autofocus": True,
                "class": "form-control",
                "placeholder": "Your email",
            }
        )
    )
    password = forms.CharField(
        label="Password",
        strip=False,
        widget=forms.PasswordInput(
            attrs={
                "autocomplete": "current-password",
                "class": "form-control",
                "placeholder": "Your password",
            }
        ),
    )
    user_type = forms.ChoiceField(
        choices=[
            ("users", "Users"),
            ("students", "Students"),
            ("instructors", "Instructors"),
            ("administrators", "Administrators"),
        ],
        initial="user",
        widget=forms.HiddenInput(),
    )
