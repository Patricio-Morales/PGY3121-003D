from django.urls import path
from . import views

urlpatterns=[
path('',views.cargarInicio,name="home"),
path('inventario/',views.inventario,name='inventario'),
path('acc_ofi/',views.acc_ofi,name='acc_ofi'),
path('agregar_prod/',views.pag_Agregar_prod,name='agregar_prod'),
path('agregar_productos',views.agregarProducto),
path('cuadernos/',views.cuadernos,name='cuadernos'),
path('lapices/',views.lapices,name='lapices'),
path('descripcion/',views.descripcion,name="descripcion"),
path('editarProd/<id>',views.pag_Editarprod,name='mod_prod'),
path('editarProd',views.editarProd),
path('eliminarProd/<id>',views.eliminarProducto),
path("accounts/login/registro/",views.register),
path('logro/',views.logro_pag),
path('register/',views.register)
]