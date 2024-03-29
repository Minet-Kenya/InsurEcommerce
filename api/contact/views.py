from rest_framework.views import APIView
from django.http import JsonResponse

from .forms import ContactForm


class SendMail(APIView):
    def post(self, request, *args, **kwargs):
        filled_contact_form = ContactForm(request.data)

        if filled_contact_form.is_valid():
            filled_contact_form.send_email(request)
            return JsonResponse({"message": "Your message has been sent. Thank you!"})
        else:
            errors = filled_contact_form.errors.get_json_data()
            print(errors)
            return JsonResponse({"errors": errors}, status=400)



        # TODO: Differentiate the messages based on the errors
