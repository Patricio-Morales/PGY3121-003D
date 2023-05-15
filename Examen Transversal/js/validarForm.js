document.getElementById("valSku").style.display="none";

document.getElementById("valProd").style.display="none";

document.getElementById("valCant").style.display="none";


function validarTodo() {

	if (document.getElementById("txtSku").value.length==0  &&
	    document.getElementById("txtProd").value.length==0 &&
		document.getElementById("txtCant").value.length==0) {

		alert("Error , no se han todos rellenado todos los campos");
		
	} else {
		alert("Campos Agregados Correctamente");
		
	}
	
}




function validarAgregarSku() {
	if (document.getElementById("txtSku").value.length==0) {
		document.getElementById("valSku").style.display="inline";
        document.getElementById("txtSku").classList.add("is-invalid")
		
	} else {
		document.getElementById("valSku").style.display="none";
        document.getElementById("txtSku").classList.remove("is-invalid")
		document.getElementById("txtSku").classList.add("is-valid")
	}
	
}



function validarAgregarNomProd() {
	if (document.getElementById("txtProd").value.length==0) {
		document.getElementById("valProd").style.display="inline";
        document.getElementById("txtProd").classList.add("is-invalid")
		
	 } else {
		document.getElementById("valProd").style.display="none";
        document.getElementById("txtProd").classList.remove("is-invalid")
		document.getElementById("txtProd").classList.add("is-valid")
	 }
}

function validarCantidad() {
	if (document.getElementById("txtCant").value.length==0) {
		document.getElementById("valCant").style.display="inline";
        document.getElementById("txtCant").classList.add("is-invalid")
		
	 } else {
		document.getElementById("valCant").style.display="none";
        document.getElementById("txtCant").classList.remove("is-invalid")
		document.getElementById("txtCant").classList.add("is-valid")
	 }
	
}