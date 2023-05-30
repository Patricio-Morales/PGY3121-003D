from django.shortcuts import render

# Create your views here.
 
def cargarInicio(request):
    return render(request,"index.html")
 
def inventario(request):
   return render(request,"inventario.html")
 
def Home(request):
   return render(request,"index.html")
 
def acc_ofi(request):
   return render(request,"acc_ofi.html")

def agregar_prod(request):
   return render(request,"agregar_prod.html")

def cuadernos(request):
   return render(request,"cuadernos.html")

def lapices(request):
   return render(request,"lapices.html")

def descripcion(request):
   return render(request,"sobre_nosotros.html")

def mod_prod(request):
   return render(request,"mod_product.html")




