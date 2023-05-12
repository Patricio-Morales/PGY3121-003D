
$(document).ready(function(){



	$("#img-1").click(function(){
		
		$("#texto").hide();
	  
	})
	$("#img-1").mouseleave(function(){
	   
		$("#texto").fadeIn();
	   
	})
	
	$("#img-2").click(function(){
		
		$("#btn").hide();
	  
	})
	$("#img-2").mouseleave(function(){
	   
		$("#btn").fadeIn();
	   
	})
	
	
	$("#img-3").click(function(){
		
		$("#texto-3").hide();
	
	})
	$("#img-3").mouseleave(function(){
	   
		$("#texto-3").fadeIn();
	   
	})
	});


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