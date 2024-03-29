from django.contrib.auth.models import Group
from django.db.models.signals import post_migrate, post_save
from django.dispatch import receiver

from .models import User, Client


@receiver(post_migrate)
def create_groups(sender, **kwargs):
    if sender.label == "user":
        # Create the groups if they don't exist
        Group.objects.get_or_create(name=User.Role.CLIENT)


@receiver(post_save, sender=Client)
def add_to_client_group(sender, instance, created, **kwargs):
    if created and instance.role == "CLIENT":
        client_group, _ = Group.objects.get_or_create(name=User.Role.CLIENT)
        instance.groups.add(client_group)
