from django.urls import path
from .views import PackageCreateView, PackageCategoryView

urlpatterns = [
    path('api/packages/', PackageCreateView.as_view(), name='package-create'),
    path('api/packages/<str:category>/', PackageCategoryView.as_view(), name='package-category'),
]
