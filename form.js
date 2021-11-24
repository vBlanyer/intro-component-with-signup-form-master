const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const validarFormulario = (e) => {
	console.log('asdasd');
	switch (e.target.name) {
		case "FirstName":
			validarCampo(expresiones.nombre, e.target, e.target.name);
		break;
		case "LastName":
			validarCampo(expresiones.nombre, e.target, e.target.name);
			break;
		case "Email":
			validarCampo(expresiones.correo, e.target, e.target.name);
			break;
		case "Password":
			validarCampo(expresiones.password, e.target, e.target.name);
			break;
	}
}

const validarCampo = (exprecion, input, name) => {
	if(exprecion.test(input.value)) {
		document.getElementById(`${name}`).classList.remove('card-form__form-item--incorrect');
		document.getElementById(`${name}`).classList.add('card-form__form-item--correct');
	} else {
		document.getElementById(`${name}`).classList.remove('card-form__form-item--correct');
		document.getElementById(`${name}`).classList.add('card-form__form-item--incorrect');
	}
}

inputs.forEach(input => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener('submit', (e)=>{
	e.preventDefault();
});