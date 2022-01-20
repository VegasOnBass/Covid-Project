from django.contrib import admin

from .models import Questions, Emails

# Register your models here.

admin.site.register(Questions)
admin.site.register(Emails)