

$("#texto").hide();

$("#texto-2").hide();

$("#texto-3").hide();

$(document).ready(function(){

   
 $("#img-1").mouseenter(function(){
		
		$("#texto").fadeIn();
	  
	})
	$("#img-1").mouseleave(function(){
	   
		$("#texto").fadeOut();
	   
	})
	
	$("#img-2").mouseenter(function(){
		
		$("#texto-2").fadeIn();
	  
	})
	$("#img-2").mouseleave(function(){
	   
		$("#texto-2").fadeOut();
	   
	})
	
	
	$("#img-3").mouseenter(function(){
		
		$("#texto-3").show();
	
	})
	$("#img-3").mouseleave(function(){
	   
		$("#texto-3").fadeOut();
	   
	})
	});