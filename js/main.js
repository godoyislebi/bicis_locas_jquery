function validateForm(){
		
	function validarNom (){
		
		var nombre = $("#name").val();
		var larg = nombre.length;
		
		if (nombre === null || nombre.length===0){ //El campo no puede quedar vacío
			//alert ('Ingrese nombre');
			$(".name-container").append("<span>El campo no puede estar vacío</span>");
			return false;
		}else if (/[0-9]/.test(nombre)){ // No permite números
			$(".name-container").append("<span>Este campo no debe tener números</span>");
			//alert ('Este campo no debe tener números');
			return false;
		}else if (nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){ //La primera letra debe ser con mayúscula
			$(".name-container").append("<span>La primera letra debe ser con mayúscula</span>");
			//alert ('La primera letra debe ser con mayúscula');
			return false;
		}else if (nombre.substring(1,larg).toUpperCase() == nombre.substring(1,larg)){ //No acepta que todas sean mayúsculas
			$(".name-container").append("<span>Sólo la primera letra debe ser con mayúscula</span>");
			//alert ('Ingrese con minúscula Ej: José');
			return false;
		
		}else{
			//alert ('Perfeh');
			return true;
		}
		
	} 
	validarNom();

	function validarApel (){
		var apellido = $("#lastname").val();
		var largo = apellido.length;
		if (apellido === null || apellido.length===0){ //El campo debe no debe estar vacío
			$(".lastname-container").append("<span>El campo no puede estar vacío</span>");
			//alert ('Ingrese apellido');
			return false;
		}else if (/[0-9]/.test(apellido)){ //No acepta números
			$(".lastname-container").append("<span>Este campo no debe tener números</span>");
			//alert ('Este campo no debe tener números');
			return false;
		}else if (apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()){ //La primera letra debe ser mayúscula
			$(".lastname-container").append("<span>La primera letra debe ser con mayúscula</span>");
			//alert ('La primera letra debe ser con mayúscula');
			return false;
		}else if (apellido.substring(1,largo).toUpperCase() == apellido.substring(1,largo)){ //No permite que todas sean mayúsculas
			$(".lastname-container").append("<span>Sólo la primera letra debe ser con mayúscula</span>");
			//alert ('Ingrese con minúscula Ej: Carrera');
			return false;
		}else{
			//alert ('Perfeh');
			return true;
		}
		
	} 
	validarApel();

	function validarCorreo(){
		var correo = $("#input-email").val();
		var caracteres = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
		if (correo === null || correo.length===0){ // El campo no debe estar vacío.
			//alert ('Ingrese correo');
			$(".email-container").append("<span>El campo no puede estar vacío</span>");
			return false;
		}else if (caracteres.test(correo)){ // Verifica el que contenga @ y .com ó .cl
			return true;
		}else{
			//alert('Ingrese su email válido');
			$(".email-container").append("<span>Ingrese email válido</span>");
			return false;
		}
	}
	validarCorreo();

	function validarContrasena(){
		var contrasena = $("#input-password").val();
		if (contrasena === null || contrasena.length===0){ // El campo no debe estar vacío
			//alert ('Ingrese contraseña');
			$(".form-group:first").append("<span>El campo no puede estar vacío</span>");
			return false;
	    }else if (contrasena.length <  6){ // Verifica que lo ingresado tenga más de 6 caracteres
		    //alert ('Ingrese contraseña de mínimo 6 caracteres');
		   $(".form-group:first").append("<span>Ingrese contraseña de mínimo 6 caracteres</span>");
		    return false;
	    }else if (contrasena === "123456"  || contrasena === "password" || contrasena === "098754"){ // Comprueba que la contraseña ingresada sea distinta de "123456","password" y "098754".
	    	//alert ('Ingrese contraseña válida');
	    	$(".form-group:first").append("<span>Ingrese contraseña válida</span>");
	    	return false;
	    }else{
	    	//alert ('Bieen');
	    	return true;

	    }
	}
	    validarContrasena();

	function validarLista(){
		var lista = $("select").val();
		
		if( lista == null || lista == 0 ) { // El campo no debe estar vacío.
			//alert ('Selecione un elemento de la lista')
			$(".form-group:eq(1)").append("<span>Selecione un elemento de la lista</span>");
 		  return false;
		}else{
			return true;
		}
	}
	validarLista();
}

//$(document).ready(function validateForm(){



//})