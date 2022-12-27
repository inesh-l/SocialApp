from django.urls import path
from .views import RegisterAPI, MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('user-api/register', RegisterAPI.as_view()),
    path('user-api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user-api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
