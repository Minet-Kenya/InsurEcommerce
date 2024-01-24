from django.shortcuts import render, redirect


def products(request):
    if not request.user.is_authenticated:
        return redirect("landing")
    else:
        context = {}
        return render(request, "ecommerce/products.html", context)
