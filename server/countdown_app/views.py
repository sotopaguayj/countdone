from rest_framework.viewsets import ModelViewSet
from .serializer import EventSerializer, GuestSerializer
from .models import Event, Guest

# Create your views here.

class GuestView(ModelViewSet):
  serializer_class = GuestSerializer
  queryset = Guest.objects.all()

class EventView(ModelViewSet):
  serializer_class = EventSerializer
  queryset = Event.objects.all()