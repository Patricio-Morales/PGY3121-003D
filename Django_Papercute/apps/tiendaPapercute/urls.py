from django.urls import path
from . import views

urlpatterns=[
path('',views.cargarInicio,),
path('',views.Home,name='Home'),
path('/inventario/',views.inventario,name='inventario'),
path('/acc_ofi/',views.acc_ofi,name='acc_ofi'),
path('/inventario/agregar_prod',views.agregar_prod,name='agregar_prod'),
path('/cuadernos/',views.cuadernos,name='cuadernos'),
path('/lapices/',views.lapices,name='lapices'),
path('/descripcion/',views.descripcion,name="descripcion"),
path('/inventario/mod_prod',views.mod_prod,name='mod_prod')
]