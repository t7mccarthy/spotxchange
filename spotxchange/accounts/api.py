from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, ProfileSerializer, BalanceSerializer

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


# # Get Profile API
# class ProfileAPI(generics.RetrieveAPIView):
#     # permission_classes = [
#     #     permissions.IsAuthenticated
#     # ]
#     print("lkjansavl;jansd;ljk nas;lejkfn;alsejkfn;lasjenfl;kajnrsl;jkvasn;rlgjkvnaesl;rkjdgfnlsvkjnfkl")
#     serializer_class = ProfileSerializer
#
#     def get_object(self):
#         print("ojohohohooihosdiufhjiosjbfliajrsnflisrbfnl;asjrbfafa;lwefjkblkj")
#         print(self.request.data)
#         print(ProfileSerializer(context=self.get_serializer_context()).data)
#         print(self.get_serializer_context())
#         print(self.get_serializer())
#         print(self.request.data)
#         # user = self.request.user.username
#         return self.request.username

from .models import Profile
from rest_framework import viewsets
from .serializers import ProfileSerializer
# from django.db import connection as conn
# import sqlite3

# Profile Viewset
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

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# class SpotViewSet(viewsets.ModelViewSet):
#     queryset = Spot.objects.all()
#     permission_classes = [
#         permissions.AllowAny
#     ]
#
#     serializer_class = SpotSerializer
#
#     def get_quereyset(self):
#         return self.request.user.spots.all()


# Change Balance API
class BalanceAPI(generics.GenericAPIView):
    serializer_class = BalanceSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        profile = serializer.validated_data
        return Response({
            "profile": BalanceSerializer(profile, context=self.get_serializer_context()).data,
        })
