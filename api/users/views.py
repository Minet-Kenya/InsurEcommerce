from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Client
from .serializers import ClientSerializer


class GetClients(ListAPIView):
    queryset = Client.clients.all()
    serializer_class = ClientSerializer
    permission_classes = []
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filterset_fields = ("id",)
    search_fields = ("username", "email", "first_name", "last_name")
