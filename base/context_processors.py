from django.conf import settings


def base(request):
    return {
        "recaptcha_site_key": settings.RECAPTCHA_SITE_KEY,
    }
