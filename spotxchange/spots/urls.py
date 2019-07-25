from rest_framework import routers
from .api import SpotViewSet

router = routers.DefaultRouter()
router.register('api/spots', SpotViewSet, 'spots')

urlpatterns = router.urls
