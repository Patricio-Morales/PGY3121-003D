$(function(){

    $("#formMod").validate({

        rules:{

            sku:{
                required:true
            },

            prod:{
                required:true
            },

            cant:{
                required:true
            }
        
    },
    messages:{
        sku:{
            required:"debe ingresar un SKU o codigo de producto"
        },

        prod:{
            required:"debe ingresar un nombre de producto"
        },
        cant:{
            required:"cantidad minima de 1"
        }
    }
 })
})
