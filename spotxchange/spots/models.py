from django.db import models
from django.contrib.auth.models import User

class Spot(models.Model):
    host = models.CharField(max_length=100)
    place = models.CharField(max_length=100)
    seats = models.IntegerField()
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(User, related_name="spots", on_delete=models.CASCADE, null=True)
    buyer = models.IntegerField(null=True)
    active = models.BooleanField(null=True)
    open_at = models.DateTimeField(auto_now_add=False)
    created_at = models.DateTimeField(auto_now_add=True)
    price = models.IntegerField()


# ADD is_active field!!!!!! Change to False when no longer available, but still can show up on private history page.
