from rest_framework.views import APIView
from rest_framework.response import Response

from .forms import ContactForm


class ContactUs(APIView):
    def post(self, request, *args, **kwargs):
        filled_contact_form = ContactForm(request.data)

        if filled_contact_form.is_valid():
            filled_contact_form.send_email(request)
            return Response({"message": "Your message has been sent. Thank you!"})
        else:
            errors = filled_contact_form.errors.get_json_data()
            print(errors)
            return Response({"errors": errors}, status=400)
