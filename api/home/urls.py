"""
Ensure routes in react js front end are here
"""

from django.conf import settings
from django.urls import path
from .views import Index as App
from django.views.static import serve


urlpatterns = [
    path("", App.as_view()),
    path("contact/", App.as_view()),
    path("auth/", App.as_view()),
    path("ecommerce/", App.as_view()),
    path("ecommerce/corporate-product/", App.as_view()),
    path("ecommerce/individual-solutions/", App.as_view()),
]

# paths in the public
urlpatterns += [
    path("favicon.ico/", serve, {'path': 'favicon.ico', 'document_root': settings.BUILD_DIR}),
    path("manifest.json/", serve, {'path': 'manifest.json', 'document_root': settings.BUILD_DIR}),
    path("apple-touch-icon.png/", serve, {'path': 'apple-touch-icon.png', 'document_root': settings.BUILD_DIR}),
    path("logo.png/", serve, {'path': 'logo.png', 'document_root': settings.BUILD_DIR}),
    path("robots.txt/", serve, {'path': 'robots.txt', 'document_root': settings.BUILD_DIR}),
]
