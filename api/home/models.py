from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager


class Company(models.Model):

    class Meta:
        verbose_name_plural = "Company Information"

    # ======= Info =======
    name = models.CharField(
        max_length=255,
        help_text="Enter the full name.",
    )
    short_name = models.CharField(
        max_length=255,
        help_text="Enter the short name.",
    )
    motto = models.CharField(
        max_length=255,
        help_text="Enter the company motto.",
    )
    # ======= Contact =======
    primary_email = models.EmailField(help_text="Enter the primary contact email.")
    secondary_email = models.EmailField(
        help_text="Enter the secondary contact email.", blank=True
    )
    primary_phone = models.CharField(
        max_length=255,
        help_text="Enter the primary contact phone number.",
    )
    secondary_phone = models.CharField(
        max_length=255,
        help_text="Enter the secondary contact phone number.",
        blank=True,
    )

    # ======= Addressing =======
    building = models.CharField(
        max_length=255,
        help_text="Enter the location building",
        blank=True,
    )
    street = models.CharField(
        max_length=255,
        help_text="Enter the location street",
        blank=True,
    )
    PO_box = models.CharField(
        max_length=255,
        help_text="Enter the P.O Box",
        blank=True,
    )
    city_name = models.CharField(
        max_length=255,
        help_text="Enter the city name",
        blank=True,
    )
    zip_code = models.CharField(
        max_length=255,
        help_text="Enter the zip code",
        blank=True,
    )
    open_days = models.CharField(
        max_length=255,
        help_text="e.g Monday - Friday",
        blank=True,
    )
    open_hours = models.CharField(
        max_length=255,
        help_text="e.g 8:15AM - 05:00PM",
        blank=True,
    )

    # ======= Social =======
    twitter_x = models.URLField(
        max_length=255,
        help_text="Enter the X account url",
        blank=True,
    )
    facebook = models.URLField(
        max_length=255,
        help_text="Enter the facebook account url",
        blank=True,
    )
    instagram = models.URLField(
        max_length=255,
        help_text="Enter the Instagram account url",
        blank=True,
    )
    linkedin = models.URLField(
        max_length=255,
        help_text="Enter the Linkedin account url",
        blank=True,
    )
    tiktok = models.CharField(
        max_length=255,
        help_text="Enter the organization's tiktok account url (Not required).",
        blank=True,
    )
    whatsapp = models.URLField(
        max_length=255,
        help_text="Enter the Whatsapp url in the format 'https://wa.me/254700000000'. Replace with appropriate phone number",
        blank=True,
    )

    @staticmethod
    def get_or_create_singleton():
        """
        Ensure only one record exists
        """

        obj, created = Company.objects.get_or_create(pk=1)
        return obj

    def __str__(self):
        return self.name


class User(AbstractUser):
    """
    Take note of the other fields within the AbstractUser class
    """

    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Admin"
        CLIENT = "CLIENT", "Client"

    base_role = "SUPERUSER"

    role = models.CharField(max_length=50, choices=Role.choices, blank=True)
    image = models.ImageField(
        upload_to="students/",
        help_text="Upload an image that is 600x600",
        blank=True,
        default="defaults/default_profile.jpg",
    )
    # other fiedls as required

    def save(self, *args, **kwargs):
        self.role = self.base_role
        return super().save(*args, **kwargs)


class ClientManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        queryset = super().get_queryset(*args, **kwargs)
        return queryset.filter(role=User.Role.CLIENT)


class Client(User):
    class Meta:
        proxy = True

    base_role = User.Role.CLIENT
    clients = ClientManager()
