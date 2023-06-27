def total_prod(request):
    total=0
    if "carrito" in request.session.keys():
            for key,value in request.session["carrito"].items():
                total+=int(value["acumulado"])
    return {"total_prod":total}