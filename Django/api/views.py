from django.shortcuts import render
from rest_framework import generics
from django.http import JsonResponse
from api.models import Shop
from api.serializer import Shop_Serializer
from rest_framework.renderers import JSONRenderer
from rest_framework import status
from rest_framework.response import Response
from operator import itemgetter
import itertools
import datetime
import pandas as pd
import time

from django.views.decorators.csrf import ensure_csrf_cookie


def get_shop_details(request):
    
    if request.method == 'GET':    
        queryset = Shop.objects.all()
        #print(queryset)
        data = Shop_Serializer(queryset,many=True)
        #api_response=JsonResponse(data.data, safe=False)
        
        return JsonResponse(data.data, safe=False)
    elif request.method == 'POST':
        print(request.POST)
        
        print('sucess--------')
        #print(serializer.data)
        name=request.POST.get('name')
        shop=request.POST.get('shop')
        status=request.POST.get('status')
        obj = Shop.objects.create(name=name, shop_name=shop,status=status)
        obj.save()

        return JsonResponse("Success",safe=False)
        #print(serializer.errors)
        return JsonResponse("error",safe=False)
