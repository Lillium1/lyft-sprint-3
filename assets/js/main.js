
//VALIDACIONES 

// suscripcion
var btnFono = document.getElementById("btnFono");
	btnFono.addEventListener("click", suscripcion);

function suscripcion (){
	var inputFono = document.getElementById("number-phone").value;

	if(inputFono=="" || inputFono == undefined || inputFono.length == 0){
	alert("Ingrese su telefono para registrarse")
	}
	else if (/^[a-zA-Z]*$/.test(inputFono)) {
	alert("Ingrese solo numeros")
	}
	else{
		alert("Gracias!! :D")
	}
}

// juego

var btnGame = document.getElementById("btn-start");
	btnGame.addEventListener("click", crearMatriz);

function crearMatriz() {
	var cooX = document.getElementById("x-coordenate").value;
	var cooY = document.getElementById("y-coordenate").value;

	if(cooX=="" || cooY == ""){
	alert("Ingrese los campos requeridos")
	}
	else if (/^[a-zA-Z]*$/.test(cooX) || /^[a-zA-Z]*$/.test(cooY)) {
	alert("Ingrese solo numeros")
	}
	else if (cooX>10 || cooY >6) {
	alert("Las coordenadas de X no puede exceder a 10. Las coordenadas de Y no puede exceder a 6")
	}
	else {
		//alargar la caja gris
		document.getElementById("cajaGame").style.height = "500px";
		//esconder los input
		document.getElementById("x-coordenate").style.display = "none";
		document.getElementById("y-coordenate").style.display = "none";
		document.getElementById("btn-start").style.display = "none";
		//mostrar la caja contendedora del juego
		document.getElementById("matriz").style.display = "block";
		//mover el footer grande y el chico
		document.getElementById("footerGrande").style.top = "1420px";
		document.getElementById("footerChico").style.top = "1600px";


	}


}



