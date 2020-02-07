"""be_vegan URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework.views import APIView
from django.http.response import HttpResponse
from rest_framework.authtoken.views import obtain_auth_token


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class MyOwnView(APIView):
    def get(self, request):
        return HttpResponse('some')

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    url(r'^my-own-view/$', MyOwnView.as_view()),
    #url(r'^api-auth/', include('rest_framework.urls'))
    path('api-token-auth/', obtain_auth_token, name='api_token_auth')
]
