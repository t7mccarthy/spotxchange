from spots.models import Spot
from rest_framework import viewsets, permissions
from .serializers import SpotSerializer

# Spot Viewset
class SpotViewSet(viewsets.ModelViewSet):
    queryset = Spot.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SpotSerializer
