from django.db import models

class Spot(models.Model):
    host = models.CharField(max_length=100)
    place = models.CharField(max_length=100)
    seats = models.IntegerField()
    open_at = models.DateTimeField(auto_now_add=False)
    created_at = models.DateTimeField(auto_now_add=True)
    price = models.IntegerField()
