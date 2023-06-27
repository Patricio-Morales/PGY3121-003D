from django.shortcuts import render
from .models import *
from django.contrib.auth.decorators import *
from django.contrib.auth import authenticate,login
from django.http import HttpResponse
from django.conf import settings
import os
from django.shortcuts import render, redirect
from apps.tiendaPapercute.carrito import Carrito
from apps.tiendaPapercute.templates import *
from django import forms
from .forms import CustomUserCreationForm
from django.contrib.auth import authenticate, login

# Create your views here.
 
def cargarInicio(request):
   return render(request,"index.html")

@login_required
def inventario(request):
   categorias = Categoria.objects.all()
   productos = Producto.objects.all()
   return render(request,"inventario.html",{"cat":categorias,"product":productos})


def acc_ofi(request):
   productos = Producto.objects.all()
   cat_acc = Producto.objects.filter( id_cat=3)
   stock_acc = Producto.objects.filter(stock_prod__gt=0)
   return render(request,"acc_ofi.html",{"prod":productos,"cat_acc":cat_acc,"filterStockacc":stock_acc})

def pag_Agregar_prod(request):
   productos = Producto.objects.all()
   categorias = Categoria.objects.all()
   return render(request,"agregar_prod.html",{"cat":categorias,"prod":productos})

def agregarProducto(request):
   print(request.POST)
   v_idProd = request.POST['txtId_prod']
   v_nombreProd = request.POST['txtNom_prod']
   v_saleProd = request.POST['txtprod_Precio']
   v_cantProd = request.POST['txtCant_prod']
   v_imgProd = request.FILES['img_Upload']
    

   categoria = Categoria.objects.get(id_cat = request.POST['cbxCat'])
    
   Producto.objects.create(
      id_prod = v_idProd , 
      nombre_prod = v_nombreProd , 
      precio_prod = v_saleProd, 
      stock_prod = v_cantProd,
      img_prod  = v_imgProd, 
      id_cat  = categoria)


   return redirect('/agregar_prod')




def pag_Editarprod(request,id):
   prod = Producto.objects.get(id_prod = id )
   cat = Categoria.objects.all()
   
   cat_Id=prod.id_cat

   prodCatId = Categoria.objects.get(id_cat=cat_Id.id_cat).id_cat

   return render(request,"editarProd.html",{"prod":prod,"cat":cat,"catId":prodCatId})



def editarProd(request):
   v_idProd = request.POST['txtId_prod']
   BD_obj = Producto.objects.get(id_prod = v_idProd)
   v_nombreProd = request.POST['txtNom_prod']
   v_saleProd = request.POST['txtprod_Precio']
   v_cantProd = request.POST['txtCant_prod']
   v_catProd = Categoria.objects.get(id_cat = request.POST['cbxCat'])

   try:
        v_prodImg = request.FILES['img_Upload']
        ruta_imagen  = os.path.join(settings.MEDIA_ROOT, str(BD_obj.img_prod))
        os.remove(ruta_imagen)
   except:
         v_prodImg = BD_obj.img_prod

   BD_obj.nombre_prod = v_nombreProd
   BD_obj.precio_prod = v_saleProd
   BD_obj .stock_prod = v_cantProd
   BD_obj .id_cat = v_catProd
   BD_obj .img_prod = v_prodImg

   
   BD_obj.save()

   return redirect('/inventario')  


def eliminarProducto(request,id):
    producto = Producto.objects.get(id_prod = id)
    producto.delete()
    ruta_imagen  = os.path.join(settings.MEDIA_ROOT, str(producto.img_prod))
    os.remove(ruta_imagen)

    return redirect('/inventario')

def cuadernos(request):
   productos = Producto.objects.all()
   cat_cd = Producto.objects.filter( id_cat=1)
   stock_cd = Producto.objects.filter(stock_prod__gt=0)
   return render(request,"cuadernos.html",{"prod":productos,"cat_cd":cat_cd,"filterStockcd":stock_cd})

def lapices(request):
   prod_lapiz = Producto.objects.all()
   cat_lapiz = Producto.objects.filter( id_cat=2)
   stock_lp = Producto.objects.filter(stock_prod__gt=0)
   return render(request,"lapices.html",{"lapices":prod_lapiz,"cat_lapiz":cat_lapiz,"filterStocklp":stock_lp })

def descripcion(request):
   return render(request,"sobre_nosotros.html")

def agregarProductoCarrito(request, id_prod):
    carrito = Carrito(request)
    producto = Producto.objects.get(id_prod=id_prod)
    carrito.agregar(producto)
    return redirect('/')

def eliminarProductoCarrito(request, id_prod):
    carrito = Carrito(request)
    producto = Producto.objects.get(id_prod=id_prod)
    carrito.eliminar(producto)
    return redirect('/')

def restarProductoCarrito(request, id_prod):
    carrito = Carrito(request)
    producto = Producto.objects.get(id_prod=id_prod)
    carrito.restar(producto)
    return redirect('/')

def limpiarProductoCarrito(request):
    carrito = Carrito(request)
    carrito.limpiar()
    return redirect('/')

def register(request):
    data = {
        'form': CustomUserCreationForm()
    }

    if request.method == 'POST':
        user_creation_form = CustomUserCreationForm(data=request.POST)

        if user_creation_form.is_valid():
            user_creation_form.save()

            user = authenticate(username=user_creation_form.cleaned_data['username'], password=user_creation_form.cleaned_data['password1'])
            login(request, user)
            return redirect('home')

    return render(request, 'registration/register.html', data)


@login_required
def logro_pag(request):
    return render(request,'logro.html')






