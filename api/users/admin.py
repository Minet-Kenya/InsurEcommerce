from django.contrib import admin
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import Group
from .models import User, Client


class BaseUserAdmin(admin.ModelAdmin):
    """
    The 'role' and 'groups' fields have not been included so as to prevent them from being changed.
    Also not included is the 'user_permissions' field.
    """

    fieldsets = (
        (
            "Authentication",
            {
                "fields": (
                    "username",
                    "email",
                    "password",
                )
            },
        ),
        (
            "Profile",
            {
                "fields": (
                    "first_name",
                    "last_name",
                    "image",
                )
            },
        ),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                ),
            },
        ),
        (
            "Important dates",
            {
                "fields": (
                    "last_login",
                    "date_joined",
                )
            },
        ),
    )

    def save_model(self, request, obj, form, change):
        """
        Overriding save_model to hash the password before saving.
        """

        if not change:  # If creating a new object
            obj.password = make_password(obj.password)  # Hash the password
        super().save_model(request, obj, form, change)

    def get_changeform_initial_data(self, request):
        """
        When saved via the admin panel the user wasn't also included in the appropriate group.
        This function sorts that out
        """

        initial = super().get_changeform_initial_data(request)
        initial["groups"] = self.get_group_filter()
        return initial

    def get_group_filter(self):
        # This method should be overridden in subclasses.
        raise NotImplementedError(
            "Subclasses of BaseUserAdmin must implement get_group_filter()"
        )


@admin.register(Client)
class ClientAdmin(BaseUserAdmin):
    def get_group_filter(self):
        return Group.objects.filter(name=User.Role.CLIENT)

    list_display = ("name","username", "email", "role")
    # list_editable = ()
    search_fields = ('email', 'name')
    list_filter = ['role']
