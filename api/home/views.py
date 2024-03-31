from django.conf import settings

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.views import APIView
from django.http import JsonResponse

from django.views import View
from django.shortcuts import redirect, render
from django.contrib.auth import logout
from django.contrib import messages

from .models import Company, User, Client
from .serializers import CompanySerializer, ClientSerializer
from .forms import ContactForm, LoginForm


class CompanyInfo(ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class SendMail(APIView):
    def post(self, request, *args, **kwargs):
        filled_contact_form = ContactForm(request.data)

        if filled_contact_form.is_valid():
            filled_contact_form.send_email(request)
            return JsonResponse({"message": "Your message has been sent. Thank you!"})
        else:
            errors = filled_contact_form.errors.get_json_data()
            print(errors)
            return JsonResponse({"errors": errors}, status=400)


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


class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request: Request, *args, **kwargs) -> Response:
        response = super().post(request, *args, **kwargs)
        access_token = response.data["access"]
        response.set_cookie(
            key=settings.SIMPLE_JWT["AUTH_COOKIE"],
            value=access_token,
            domain=settings.SIMPLE_JWT["AUTH_COOKIE_DOMAIN"],
            path=settings.SIMPLE_JWT["AUTH_COOKIE_PATH"],
            expires=settings.SIMPLE_JWT["ACCESS_TOKEN_LIFETIME"],
            secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
            httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
            samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
        )
        return response