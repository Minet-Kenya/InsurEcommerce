from django.shortcuts import render

def custom_404(request, exception):
    context = {}
    return render(request, "base/custom_404.html", context)