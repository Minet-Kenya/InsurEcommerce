from django.shortcuts import render


def landing(request):
    context = {}
    return render(request, "home/landing.html", context)


def privacy_policy(request):
    context = {}
    return render(request, "home/privacy_policy.html", context)
