from django.shortcuts import render


def retail(request):
    context = {}
    return render(request, "retail/index.html", context)
