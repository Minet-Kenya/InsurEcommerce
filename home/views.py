from django.shortcuts import render


def home(request):
    context = {}
    return render(request, "home/index.html", context)


def privacy_policy(request):
    context = {}
    return render(request, "home/privacy_policy.html", context)
