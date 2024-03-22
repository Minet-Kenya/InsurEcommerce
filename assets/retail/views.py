from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render
from django.views.generic.base import TemplateView


class RetailView(LoginRequiredMixin, TemplateView):
    template_name = "retail/home.html"
    extra_context = {}


def individual_solutions(request):
    return render(request, "retail/individual_solutions.html", {})


def corporate_product(request):
    return render(request, "retail/corporate_product.html", {})


def contact(request):
    context = {}
    return render(request, "retail/contact.html", context)


