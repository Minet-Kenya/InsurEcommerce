from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


# ------------------- USER MODEL & GROUPS -------------------


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


# ------------------- CLIENT PROXY MODEL -------------------


class ClientManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        queryset = super().get_queryset(*args, **kwargs)
        return queryset.filter(role=User.Role.CLIENT)


class Client(User):
    class Meta:
        proxy = True

    base_role = User.Role.CLIENT
    clients = ClientManager()
