from spots.models import Spot
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
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


# Update Spot API
class SpotUpdateAPI(generics.GenericAPIView):
    def put(self, request, pk, format=None):
        print("reached api")
        print("pk", pk)
        print("data", request.data)
        spot = Spot.objects.get(id=pk)
        print("spot", spot)
        serializer = SpotSerializer(spot, data=request.data['spots'])
        print("serializer", serializer)
        if serializer.is_valid():
            print("valid serializer")
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
