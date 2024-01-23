from django.shortcuts import render


def home(request):
    context = {}
    return render(request, "home.html", context)


def retail(request):
    context = {}
    return render(request, "retail.html", context)
