from django.urls import path,include
from motocycle_insurance.views import MotorCycleCoverDetailsListCreateView, MotorCycleCoverDetailsRetrieveUpdateDestroyView, MotorVehicleDetailsListCreateView,MotorVehicleDetailsRetrieveUpdateDestroyView,SendPolicyEmailAPIView,SendMotorPolicyEmailAPIView,EducationPolicyListView,EducationPolicyUpdateView,OtherPoliciesViewSet,FetchPoliciesView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'other_policies', OtherPoliciesViewSet)

urlpatterns = [
    path('motorcycle-cover-details/', MotorCycleCoverDetailsListCreateView.as_view(), name='motorcycle-cover-details-list-create'),
    path('motorcycle-cover-details/<uuid:pk>/', MotorCycleCoverDetailsRetrieveUpdateDestroyView.as_view(), name='motorcycle-cover-details-retrieve-update-destroy'),
    path('motor-cover-details/', MotorVehicleDetailsListCreateView.as_view(), name='motor-cover-details-list-create'),
    path('motor-cover-details/<uuid:pk>/', MotorVehicleDetailsRetrieveUpdateDestroyView.as_view(), name='motor-cover-details-retrieve-update-destroy'),
    path('send-policy-email/<str:policy_type>/<uuid:policy_id>/', SendPolicyEmailAPIView.as_view(), name='send_policy_email'),
    path('send-motor-policy-email/', SendMotorPolicyEmailAPIView.as_view(), name='send_motor_policy_email'),
    path('education-policies/', EducationPolicyListView.as_view(), name='education_policies_list_create'),
    path('education-policies/<int:pk>/', EducationPolicyUpdateView.as_view(), name='education_policies_update'),
    path('', include(router.urls)),
    path('fetch-policies/', FetchPoliciesView.as_view(), name='fetch-policies'),
]