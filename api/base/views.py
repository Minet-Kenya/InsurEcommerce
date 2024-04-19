from rest_framework.generics import ListAPIView
from .models import Company
from .serializers import CompanySerializer,DocumentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated

class GetCompany(ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class DocumentUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = DocumentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(client=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)