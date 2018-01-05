#!usr//bin/python
#Filename:views_doc.py

from django.shortcuts import render
from django.http import HttpResponse

def login(request):
    return render(request,'blog/login.html')
