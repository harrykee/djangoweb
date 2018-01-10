from django.urls import path
from home import views
from home import chapi

urlpatterns = [
    path('', views.index,name='index'),
    path('line/', chapi.chart,name='chart'),
    path('chart/', views.chart,name='chart'),
    path('rate/', views.rate,name='rate'),
    path('column/', views.column,name='column'),
    path('cloud/', views.cloud,name='cloud'),
    path('borrow/', views.borrow,name='borrow'),
    # path('apite/', chapi.apite,name='apite'),
]

