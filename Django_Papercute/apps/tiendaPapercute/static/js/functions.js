

  


const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
});
const modalTrigger = document.getElementById('btn2');
const modalAlert = document.getElementById('exampleModalLabel');

if (toastTrigger) {
    toastTrigger.addEventListener('redirect', () => {

        const toast = new bootstrap.Modal(modalAlert);
        toast.show();

    });
}
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