from django.urls import path
from . import views  # Import views from the same directory

urlpatterns = [
    path('register', views.register, name='register'),  # This makes 'accounts/register' work
    path('login', views.login, name='login'),  # This makes 'accounts/login' work
    path('logout',views.logout,name='logout') # This makes 'accounts/logout' work

]
