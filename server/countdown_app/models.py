from django.db import models
from uuid import uuid4
from random import randint
# Create your models here.

class Event(models.Model):
  id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
  name = models.CharField(max_length=200)
  date = models.DateField()

  def __str__(self):
    return self.name

class Guest(models.Model):
  id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
  event_id = models.ForeignKey(Event, null=True, on_delete=models.CASCADE)
  name = models.CharField(max_length=200)
  confirm_code = models.IntegerField(default=randint(100000, 999999), editable=False)
  assist_confirm = models.BooleanField(default=False)

  def __str__(self):
    return self.name