from django.conf import settings

from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter

from django.views import View
from django.shortcuts import redirect, render
from django.contrib.auth import logout

from django.contrib import messages
from django.http import JsonResponse

from .models import User, Client
from .forms import LoginForm
from .serializers import ClientSerializer


class ClientList(ListAPIView):
    queryset = Client.clients.all()
    serializer_class = ClientSerializer
    permission_classes = []
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filterset_fields = ("id",)
    search_fields = ("username", "email", "first_name", "last_name")


class Login(View):
    def get(self, request):
        if not request.user.is_authenticated:
            return render(
                request,
                "user/login.html",
                {
                    "student_form": LoginForm(),
                    "environment": settings.ENVIRONMENT,
                    "recaptcha_site_key": settings.RECAPTCHA_SITE_KEY,
                },
            )
        else:
            messages.warning(request, "You are already logged in!")
            return redirect("index")

    def post(self, request):
        role = request.POST.get("role")
        if role == User.Role.CLIENT:
            filled_login_form = LoginForm(request.POST)
        else:
            # Confirm whether it will be captured
            return JsonResponse({"error": "Validation Error"}, status=400)

        if filled_login_form.is_valid():
            filled_login_form.signin(request)
            return JsonResponse({"message": "Login successful!"})
        else:
            errors = filled_login_form.errors.get_json_data()
            return JsonResponse({"errors": errors}, status=400)


class Logout(View):
    def get(self, request):
        logout(request)
        messages.success(
            request,
            "You have been logged out. Thank you for spending time in the school platform",
        )
        return redirect("index")


class RegisterNewUser(APIView):
    def post(self, request):
        username = request.data.get("username")
        email = request.data.get("email")
        name = request.data.get("name")
        password = request.data.get("password")

        try:
            client = Client.objects.create_user(
                username=username,
                password=password,
                email=email,
                first_name=name,
            )
            client.save()
            print("{} created successfully".format(client.username))
            return JsonResponse({"message": "User created"})
        except:
            return JsonResponse(
                {"message": "User creation failed or user already exists"}
            )
