from django.shortcuts import render
# Create your views here.
def index(request):
    return render(request,'home/index.html')

def chart(request):
    return render(request,'home/chart.html')

def rate(request):
    return render(request,'home/rate.html')

def column(request):
    return render(request,'home/column.html')

def cloud(request):
    return render(request,'home/cloud.html')

def borrow(request):
    return render(request,'home/borrow.html')

