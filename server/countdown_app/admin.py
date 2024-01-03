from django.contrib import admin
from .models import Event, Guest

# Register your models here.

class EventAdmin(admin.ModelAdmin):
  list_display = ['id', 'name', 'date']

class GuestAdmin(admin.ModelAdmin):
  list_display = ['id', 'event_id', 'name', 'confirm_code', 'assist_confirm']
  raw_id_fields = ['event_id']

admin.site.register(Event, EventAdmin)
admin.site.register(Guest, GuestAdmin)