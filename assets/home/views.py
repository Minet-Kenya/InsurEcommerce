from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect, render
from django.views import View
from django.views.generic.base import TemplateView

from .forms import ContactForm, LoginForm


class IndexView(TemplateView):
    template_name = "home/index.html"
    extra_context = {"home_active": "active"}


class PrivacyPolicyView(TemplateView):
    template_name = "home/privacy_policy.html"
    extra_context = {"policy_active": "active"}


class ContactView(TemplateView):
    template_name = "home/contact.html"
    extra_context = {"contact_active": "active"}


class LoginView(View):
    template_name = "home/login.html"

    def get(self, request):
        if request.user.is_authenticated:
            return redirect("index")

        form = LoginForm
        return render(request, self.template_name, {"form": form})

    def post(self, request):
        if request.user.is_authenticated:
            messages.error(request, "You are already logged in!")
            return redirect("index")

        email = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            next_url = request.GET.get("next")
            messages.success(request, "Login successful!")
            return redirect(next_url if next_url else "index")
        else:
            form = LoginForm
            messages.error(request, "Invalid username or password!")
            return render(
                request,
                self.template_name,
                {"error": form.error_messages, "form": form},
            )


class SignUpView(View):
    template_name = "home/signup.html"
    extra_context = {"signup_active": "active"}

    def get(self, request):
        if request.user.is_authenticated:
            return redirect("index")
        else:
            return render(request, self.template_name, self.extra_context)

    def post(self, request):
        pass


class LogoutView(View):
    def get(self, request):
        logout(request)
        messages.success(
            request, "You have been logged out. Thank you for spending time with us!"
        )
        return redirect("index")
