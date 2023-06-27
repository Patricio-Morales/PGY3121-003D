from django.db import models

# Create your models here.


class Categoria(models.Model):
    id_cat = models.IntegerField(primary_key=True,null=False)
    nombre_cat = models.CharField(max_length=100,null=False)

    def __str__(self):
        txt =" Nombre: {0} "
        return txt.format(self.nombre_cat)


class Producto(models.Model):
    id_prod = models.IntegerField(primary_key=True,null=False)
    nombre_prod = models.CharField(max_length=100,null=False)
    precio_prod = models.IntegerField(null=False)
    id_cat = models.ForeignKey(Categoria,on_delete=models.CASCADE)
    stock_prod = models.IntegerField(null=False)
    fecha_prod = models.DateField(auto_now_add=True)
    img_prod = models.ImageField(upload_to='prodImagenes')

    def __str__(self):
        txt =" ID Producto: {0} - Nombre Producto : {1}"
        return txt.format(self.id_prod,self.nombre_prod)
    
class Comuna(models.Model):
    id_comuna = models.IntegerField(primary_key=True,null=False)
    nombre_comuna = models.CharField(max_length=150,null=False)

    def __str__(self):
        txt =" ID Region: {0} - Nombre Comuna : {1}"
        return txt.format(self.id_comuna ,self.nombre_comuna)

class Region(models.Model):
    id_region = models.IntegerField(primary_key=True,null=False)
    nombre_region = models.CharField(max_length=150,null=False)

    def __str__(self):
        txt =" ID Region: {0} - Nombre Region : {1}"
        return txt.format(self.id_region,self.nombre_region)


class Cliente(models.Model):
    rut_cliente = models.IntegerField(primary_key=True,null=False)
    primer_nombre = models.CharField(max_length=100,null=False)
    segundo_nombre = models.CharField(max_length=100,null=False)
    ap_paterno = models.CharField(max_length=100,null=False)
    ap_materno = models.CharField(max_length=100,null=False)
    correo_cli = models.EmailField(max_length=254,null=False)
    direccion_cli = models.CharField(max_length=254,null=False)
    id_comuna = models.ForeignKey(Comuna,on_delete=models.CASCADE)
    id_region = models.ForeignKey(Region,on_delete=models.CASCADE)
    
    def __str__(self):
        txt =" Rut Cliente: {0} - Nombre: {1} {2} {3} {4}"
        return txt.format(self.rut_cliente,self. primer_nombre,
                          self.segundo_nombre,self.ap_paterno,self.ap_materno)
    

    
