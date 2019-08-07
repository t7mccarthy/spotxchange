from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, ProfileSerializer

from .models import Profile
from rest_framework import viewsets

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

# # Profile Viewset
class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ProfileSerializer
    # c = conn.cursor()

    def get_queryset(self):
        # print(self.request.user.id)
        # c.execute('SELECT * FROM accounts_profile WHERE ')
        return [self.request.user.profile]

    def perform_update(self, serializer):
        serializer.save()#user=self.request.user)


# class ProfileAPI(generics.GenericAPIView):
#     def get(self, request, format=None):
#         profile = Profile.objects.all()
#         serializer = ProfileSerializer(profile, many=True)
#         return Response(serializer.data)


# Change Balance API
class ProfileUpdateAPI(generics.GenericAPIView):
    def put(self, request, pk, format=None):
        print("data", request.data)
        profile = Profile.objects.get(id=pk)
        print("profile", profile)
        serializer = ProfileSerializer(profile, data=request.data['profile'])
        print("serializer", serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
