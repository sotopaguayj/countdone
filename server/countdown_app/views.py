from rest_framework import viewsets
from .serializer import GuestSerializer
from .models import Guest

# Create your views here.

class GuestView(viewsets.ModelViewSet):
  serializer_class = GuestSerializer
  queryset = Guest.objects.all()
