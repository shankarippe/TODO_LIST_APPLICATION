from django.urls import path
from . import views  # Import views from the same directory

urlpatterns = [
    path('', views.index, name='home'),  # This makes 'travello/' work
]
