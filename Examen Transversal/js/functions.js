document.getElementById("valSku").style.display="none";
document.getElementById("valProd").style.display="none";
document.getElementById("valCant").style.display="none";


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
		document.getElementById("txtSku").classList.add("is-valid")
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
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
});

  function eliminar() {
	if ( document.getElementById("chk1").checked==true) {
		document.getElementById("1").style.visibility="hidden";
		console.log(array);
	} 
	if(document.getElementById("chk2").checked==true){
		document.getElementById("2").style.visibility="hidden";
	} 
	if (document.getElementById('chk3').checked==true  ) {
 	   document.getElementById("3").style.visibility="hidden";
		}
		if(document.getElementById("chk1").checked==false &&document.getElementById("chk2").checked==true && document.getElementById("chk3").checked==false){
			alert("Favor marcar algun producto")

		}
	}