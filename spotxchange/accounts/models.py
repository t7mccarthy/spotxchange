from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=100, blank=True)
    balance = models.IntegerField(default=10)

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

## TODO for MVP:
# - get get_profile working
# - get change_balance working
# - set up real buy action
# - set up profle and history, update location
# __________go back home____________
# - integrate with google maps api
# - switch to postgres
# - deploy to heroku
# - buy domain name
