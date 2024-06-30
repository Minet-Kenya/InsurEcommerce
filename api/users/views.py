from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Client
from .serializers import ClientSerializer
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import ClientSerializer, MyTokenObtainPairSerializer,ResetPasswordSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated

class GetClients(ListAPIView):
    queryset = Client.clients.all()
    serializer_class = ClientSerializer
    permission_classes = []
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filterset_fields = ("id",)
    search_fields = ("username", "email", "first_name", "last_name")


class RegisterClientView(APIView):

    def post(self, request):
        serializer = ClientSerializer(data=request.data)

        if serializer.is_valid():
            client = serializer.save()
            print(client)



            # context = {'request': request}
            # subject = 'Welcome to Our Site'
            # message ='Thank you for registering to our e-commerce. Your username is: ' + client.username + ' and your email is: ' + client.email
            # html_content = render_to_string('mail/welcome.html', {'subject': subject, 'email': client.email,'message':message})
            # msg = EmailMultiAlternatives(
            # subject,
            # message,
            # 'noreply@gmail.com',
            # [client.email], )
            # # Attach the HTML content
            # msg.attach_alternative(html_content, "text/html")
            # Send the email
            # msg.send()

            # sent = msg.send()
            # if sent:
            #     return Response({
            #     'client': ClientSerializer(client, context=context).data,
            #     'message': 'Account Created Successfully. Check your email for verification code',
            # }, status=status.HTTP_201_CREATED)
            # else:
            #     return Response({'error': 'Failed to send confirmation email.'}, status=status.HTTP_400_BAD_REQUEST)

            # return Response({
            #     'client': ClientSerializer(client, context=context).data,
            #     'message': 'Account Created Successfully. Check your email for verification code',
            # }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class LoginClientView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



class UserInformationView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
            'user_id': user.id,
            'username': user.username,
            'email': user.email,
            'name': user.name,
            "personal_info":user.personal_info,
        })

    def patch(self, request):
        # Override the permission classes for the patch method
        serializer = ClientSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ResetPasswordView(APIView):
    serializer_class = ResetPasswordSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.reset_password(serializer.validated_data)
            return Response({'message': 'Password reset request sent.'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)