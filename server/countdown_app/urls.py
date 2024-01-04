from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from countdown_app import views

router = routers.DefaultRouter()
router.register(r'guest', views.GuestView, 'api')
router.register(r'event', views.EventView, 'api')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Event API"))
]
