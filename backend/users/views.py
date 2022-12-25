from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework import generics
# Create your views here.


class UserAPI(APIView):
    authentication_classes = [TokenAuthentication]
    permission_class = [AllowAny]

    @staticmethod
    def get(request, *args, **kwargs):
        user = User.objects.get(id=request.user.id)
        serializer = UserSerializer(user)
        return Response(serializer.data)


class RegisterAPI(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer


class LoginAPI(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer
    