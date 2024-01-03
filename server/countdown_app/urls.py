from django.urls import path, include
from rest_framework import routers
from countdown_app import views

router = routers.DefaultRouter()
router.register(r'guest', views.GuestView, 'guest')
urlpatterns = [
    path('api/v1/', include(router.urls))
]
