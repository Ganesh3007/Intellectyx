from django.urls import path, include
from django.conf.urls import url
from api import views

urlpatterns = [
    path('api/get_shop_details', views.get_shop_details),
   
    
]



