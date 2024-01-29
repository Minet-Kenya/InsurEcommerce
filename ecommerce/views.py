from django.shortcuts import render


def home(request):
    context = {}
    return render(request, "ecommerce/home.html", context)


def individual_solutions(request):
    return render(request, "ecommerce/individual_solutions.html", {})


def corporate_product(request):
    return render(request, "ecommerce/corporate_product.html", {})


def login(request):
    context = {}
    return render(request, "ecommerce/login.html", context)