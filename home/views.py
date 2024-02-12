from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Group
from django.shortcuts import redirect, render
from django.views import View
from django.views.generic.base import TemplateView

from .forms import ContactForm, LoginForm


class IndexView(TemplateView):
    template_name = "home/index.html"
    extra_context = {"home_active": "active"}


class AboutView(TemplateView):
    template_name = "home/about.html"
    extra_context = {"about_active": "active"}


class ContactView(TemplateView):
    template_name = "home/contact.html"
    extra_context = {"contact_active": "active"}


class PrivacyPolicyView(TemplateView):
    template_name = "home/privacy_policy.html"
    extra_context = {"policy_active": "active"}


class LoginView(View):
    template_name = "home/login.html"

    def get(self, request):
        if request.user.is_authenticated:
            return redirect("index")

        form = LoginForm
        return render(
            request, self.template_name, {"login_active": "active", "form": form}
        )

    def post(self, request):
        pass


class LogoutView(View):
    def get(self, request):
        logout(request)
        return redirect("index")


class SignUpView(TemplateView):
    template_name = "home/signup.html"
    extra_context = {"signup_active": "active"}
