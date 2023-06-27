"""Papercute URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from apps.tiendaPapercute.views import agregarProductoCarrito, eliminarProductoCarrito, restarProductoCarrito, limpiarProductoCarrito
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('apps.tiendaPapercute.urls')),
    path('accounts/',include('django.contrib.auth.urls')),
    path('agregar/<int:id_prod>/', agregarProductoCarrito, name="Add"),
    path('eliminar/<int:id_prod>/', eliminarProductoCarrito, name="Del"),
    path('restar/<int:id_prod>/', restarProductoCarrito, name="Sub"),
    path('limpiar/', limpiarProductoCarrito, name="CLS"),
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    

