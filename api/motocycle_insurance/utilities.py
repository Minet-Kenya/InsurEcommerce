# utilities.py
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

def send_policy_email(user, policy, policy_type):
    subject = f'{policy_type} Policy Details'
    from_email = 'noreply@gmail.com'
    recipient_list = [user.email]

    # Render the HTML template
    html_content = render_to_string('mail/quotation.html', {'user': user, 'policy': policy, 'policy_type': policy_type})

    # Create the email
    email = EmailMultiAlternatives(subject, '', from_email, recipient_list)
    email.attach_alternative(html_content, "text/html")

    # Send the email
    email.send()

def send_motor_policy_email(user, policy,policy_type):
    subject = f'{policy_type} Policy Details'
    from_email = 'noreply@gmail.com'
    recipient_list = [user.email]

    # Render the HTML template
    html_content = render_to_string('mail/quotation-motor.html', {'user': user, 'policy': policy, 'policy_type': policy_type})

    # Create the email
    email = EmailMultiAlternatives(subject, '', from_email, recipient_list)
    email.attach_alternative(html_content, "text/html")

    # Send the email
    email.send()
