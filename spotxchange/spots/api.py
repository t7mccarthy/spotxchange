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

    def get_quereyset(self):
        return self.request.user.spots.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
