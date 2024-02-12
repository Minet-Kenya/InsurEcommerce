from django.shortcuts import render


def home(request):
    context = {}
    return render(request, "retail/home.html", context)


def individual_solutions(request):
    return render(request, "retail/individual_solutions.html", {})


def corporate_product(request):
    return render(request, "retail/corporate_product.html", {})


def login(request):
    context = {}
    return render(request, "retail/login.html", context)


def register(request):
    context = {}
    return render(request, "retail/register.html", context)


def contact(request):
    context = {}
    return render(request, "retail/contact.html", context)


def privacy_policy(request):
    context = {}
    return render(request, "retail/privacy_policy.html", context)