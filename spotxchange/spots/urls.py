from django.urls import path, include
from rest_framework import routers
from .api import SpotViewSet, SpotUpdateAPI

router = routers.DefaultRouter()
router.register('api/spots', SpotViewSet, 'spots')

urlpatterns = router.urls


urlpatterns += [
    # path('api/profile', ProfileAPI.as_view()),
    path('api/buy_spot/<int:pk>', SpotUpdateAPI.as_view()),
]
