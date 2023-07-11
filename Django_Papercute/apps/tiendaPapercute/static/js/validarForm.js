const toastTrigger = document.getElementById('toastTrigger');
const toastAlert = document.getElementById('toastAlert');

if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {

        const toast = new bootstrap.Toast(toastAlert);
        toast.show();

    });
}

'use strict'
const forms = document.querySelectorAll('#formAgregarProducto')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
	if (!form.checkValidity()) {
	  event.preventDefault()
	  event.stopPropagation()
	}

	form.classList.add('was-validated')
  }, false)
})


// const formulario = document.getElementById("formAgregarProducto")

// document.getElementById("valSku").style.display="none";

// document.getElementById("valProd").style.display="none";

// document.getElementById("valCant").style.display="none";

// document.getElementById("valPrecio").style.display="none";

// formulario.addEventListener('submit',function(evento){
//     evento.preventDefault();

// 	if (document.getElementById("txtId_prod").value.length==0) {
// 		document.getElementById("valSku").style.display="inline";
//         document.getElementById("txtId_prod").classList.add("is-invalid")
		
// 	} else {
// 		document.getElementById("valSku").style.display="none";
//         document.getElementById("txtId_prod").classList.remove("is-invalid")
// 		document.getElementById("txtId_prod").classList.add("is-valid")
// 	}

// 	if (document.getElementById("txtNom_prod").value.length==0) {
// 		document.getElementById("valProd").style.display="inline";
//         document.getElementById("txtNom_prod").classList.add("is-invalid")
		
// 	 } else {
// 		document.getElementById("valProd").style.display="none";
//         document.getElementById("txtNom_prod").classList.remove("is-invalid")
// 		document.getElementById("txtNom_prod").classList.add("is-valid")
// 	 }
	
// 	 if (document.getElementById("txtCant_prod").value.length==0) {
// 		document.getElementById("valCant").style.display="inline";
//         document.getElementById("txtCant_prod").classList.add("is-invalid")
		
// 	 } else {
// 		document.getElementById("valCant").style.display="none";
//         document.getElementById("txtCant_prod").classList.remove("is-invalid")
// 		document.getElementById("txtCant_prod").classList.add("is-valid")
// 	 }

// 	 if (document.getElementById("txtprod_Precio").value.length==0) {
// 		document.getElementById("valPrecio").style.display="inline";
//         document.getElementById("txtprod_Precio").classList.add("is-invalid")
		
// 	 } else {
// 		document.getElementById("valPrecio").style.display="none";
//         document.getElementById("txtprod_Precio").classList.remove("is-invalid")
// 		document.getElementById("txtprod_Precio").classList.add("is-valid")
// 		}

	
// })