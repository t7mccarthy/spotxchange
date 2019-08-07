from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI, ProfileUpdateAPI, ProfileViewSet#ProfileAPI
from knox import views as knox_views

from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/profile', ProfileViewSet, 'profile')

urlpatterns = router.urls


urlpatterns += [
    # path('api/profile', ProfileAPI.as_view()),
    path('api/profile/<int:pk>', ProfileUpdateAPI.as_view()),
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
]
