from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Package
from .serializers import PackageSerializer

class PackageCreateView(APIView):
    def get(self, request):
        # Retrieve all packages
        packages = Package.objects.all()
        # Serialize the packages
        serializer = PackageSerializer(packages, many=True)
        # Return the serialized data
        return Response(serializer.data)

    def post(self, request):
        serializer = PackageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class PackageCategoryView(APIView):
    def get(self, request, category):
        packages = Package.objects.filter(category=category)
        serializer = PackageSerializer(packages, many=True)
        return Response(serializer.data)
