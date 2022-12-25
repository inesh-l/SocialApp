from django.urls import path
from .views import UserAPI, RegisterAPI

urlpatterns = [
    path("user-api/get-details", UserAPI.as_view()),
    path('user-api/register', RegisterAPI.as_view()),
]
