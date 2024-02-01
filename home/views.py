from django.shortcuts import render


def landing(request):
    context = {}
    return render(request, "home/index.html", context)



