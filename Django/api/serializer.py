from rest_framework import serializers
from .models import Shop
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User



class Shop_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields= ('name', 'shop_name','status')

