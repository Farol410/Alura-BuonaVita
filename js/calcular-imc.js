var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++){
	var  paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso  = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura  = tdAltura.textContent;

	var tdIMC = paciente.querySelector(".info-imc");

	pesoEsValido = validarPeso(peso);
	alturaEsValido = validarAltura(altura);

	if (!pesoEsValido){
		pesoEsValido = false;
		tdIMC.textContent = "Peso incorrecto";
		paciente.classList.add("paciente-incorrecto");
	}

	if (!alturaEsValido){
		alturaEsValido = false;
		tdIMC.textContent = "Altura incorrecta";
		paciente.classList.add("paciente-incorrecto");

	}

	if (pesoEsValido && alturaEsValido) {
		tdIMC.textContent = calcularIMC(peso,altura)
	}
}

function calcularIMC(peso,altura){
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validarPeso(peso){
	if (peso >= 0 && peso < 500){
		return true;
	}else{
		return false;
	}
}

function validarAltura(altura){
	if (altura >= 0 && altura < 3.00){
		return true;
	}else{
		return false;
	}
}

