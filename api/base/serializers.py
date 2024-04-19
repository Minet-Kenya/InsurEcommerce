from rest_framework import serializers
from .models import Company,Document
from django.conf import settings


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"


class DocumentSerializer(serializers.ModelSerializer):
    client = serializers.StringRelatedField()
    file_url = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = ['document', 'uuid', 'name', 'type', 'client','file_url']

    def get_file_url(self, obj):
        # Assuming the file is stored in a 'media' directory
        # and the MEDIA_URL is set to '/media/' in settings.py
        return f"{settings.MEDIA_URL}{obj.document.name}"
