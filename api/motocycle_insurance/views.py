from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework import generics, permissions
from rest_framework.generics import ListCreateAPIView, UpdateAPIView
from .models import MotorCycleCoverDetails, MotorVehicleDetails,EducationPolicy,OtherPolicies
from motocycle_insurance.serializers import MotorCycleCoverDetailsSerializer,MotorVehicleDetailsSerializer,EducationPolicySerializer,OtherPoliciesSerializer
from rest_framework.generics import get_object_or_404
from .utilities import send_policy_email,send_motor_policy_email
from rest_framework.response import Response
import json
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives


class MotorCycleCoverDetailsListCreateView(generics.ListCreateAPIView):
    queryset = MotorCycleCoverDetails.objects.all()
    serializer_class = MotorCycleCoverDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(client=self.request.user)

class MotorCycleCoverDetailsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MotorCycleCoverDetails.objects.all()
    serializer_class = MotorCycleCoverDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(client=self.request.user)

class MotorVehicleDetailsListCreateView(generics.ListCreateAPIView):
    queryset = MotorVehicleDetails.objects.all()
    serializer_class = MotorVehicleDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(client=self.request.user)

class MotorVehicleDetailsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MotorVehicleDetails.objects.all()
    serializer_class = MotorVehicleDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(client=self.request.user)

class SendPolicyEmailAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, policy_type, policy_id):
        user = request.user

        # Retrieve the policy instance based on the policy_type
        if policy_type == 'motorcycle':
            policy = get_object_or_404(MotorCycleCoverDetails, id=policy_id, client=user)
        elif policy_type == 'motor':
            policy = get_object_or_404(MotorVehicleDetails, id=policy_id, client=user)
        else:
            return Response({'error': 'Invalid policy type'}, status=400)

        # Send the email
        send_policy_email(user, policy, policy_type.capitalize())

        return Response({'message': 'Email sent successfully'}, status=200)

class SendMotorPolicyEmailAPIView(APIView):

    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        data_str = request.body.decode('utf-8')
        data_dict = json.loads(data_str)

        # Initialize the policy dictionary
        policy = {
                "title": "",
                "premiums": "",
                "carvalue":"",
                "policytype":"",
                "registrationno":"",
                "vehicleuse":"",
                "enginecc":"",
                "make":"",
                "manufactureyear":"",
                # "policy_period":"",
        }

        # Update the policy dictionary with data from the request
        policy["title"] = data_dict.get("policy_name", "")
        policy["policytype"] = data_dict.get("policy_type", "")
        policy["premiums"] = data_dict.get("price", "")

        policy["carvalue"] = data_dict.get("car_value", "")
        policy["enginecc"] = data_dict.get("engine_cc", "")
        policy["make"] = data_dict.get("make", "")
        policy["manufactureyear"] = data_dict.get("manufacture_year", "")

        policy["registrationno"] = data_dict.get("registration_no", "")
        policy["vehicleuse"] = data_dict.get("vehicle_use", "")

        # print(policy)

        user = request.user

        # Corrected the error message to reflect the correct fields
        if not policy["premiums"] or not policy["title"]:
            return Response({'error': 'Both premiums and title are required'}, status=400)

        try:
            # Assuming send_policy_email is a function that takes user, policy, and a type as arguments
            send_motor_policy_email(user, policy, 'Motor')
            return Response({'status': 'Email sent successfully'}, status=200)
        except Exception as e:
            # Log the exception for debugging purposes
            print(f"Failed to send email: {e}")
            return Response({'error': 'Failed to send email'}, status=500)

class EducationPolicyListView(ListCreateAPIView):
    queryset = EducationPolicy.objects.all()
    serializer_class = EducationPolicySerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        policy = serializer.save()

        user_email = self.request.user.email
        # print(user_email)

        # Define the email subject and from
        subject = 'New Education Policy Created'
        # from_email = 'from@example.com'

        # Load the HTML template
        html_content = render_to_string('education-quatation.html', {'policy': policy})

        email = EmailMultiAlternatives(subject, '', 'evan.wakae@minet.co.ke', [user_email])

        email.attach_alternative(html_content, "text/html")

        # Send the email

        success = email.send()

        if success:
            # If the email is successfully sent, mark the policy as emailed
            policy.email_sent = True
            policy.save()

        if policy.email_sent:
             return Response({"message": "Email sent successfully."}, status=200)
        else:
            return Response({"message": "Failed to send email. Please try again."}, status=500)


class EducationPolicyUpdateView(UpdateAPIView):
    queryset = EducationPolicy.objects.all()
    serializer_class = EducationPolicySerializer
    permission_classes = [permissions.IsAuthenticated]


# class OtherPoliciesListView(ListCreateAPIView):
#     queryset = OtherPolicies.objects.all()
#     serializer_class = OtherPoliciesSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def perform_create(self, serializer):
#         serializer.save(client=self.request.user)def perform_create(self, serializer):
#         serializer.save(client=self.request.user)

class OtherPoliciesViewSet(viewsets.ModelViewSet):
    queryset = OtherPolicies.objects.all()
    serializer_class = OtherPoliciesSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        policy=serializer.save(client=self.request.user)

        user_email = self.request.user.email
        # print(user_email)

        # Define the email subject and from
        subject = 'New Policy Created'
        # from_email = 'from@example.com'

        # Load the HTML template
        html_content = render_to_string('other-quatation.html', {'policy': policy})

        email = EmailMultiAlternatives(subject, '', 'evan.wakae@minet.co.ke', [user_email])

        email.attach_alternative(html_content, "text/html")

        # Send the email
        success = email.send()

        if success:
            # If the email is successfully sent, mark the policy as emailed
            policy.email_sent = True
            policy.save()

        if policy.email_sent:
             return Response({"message": "Email sent successfully."}, status=200)
        else:
            return Response({"message": "Failed to send email. Please try again."}, status=500)