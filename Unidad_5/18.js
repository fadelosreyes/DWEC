const inputNombre = document.getElementById('nombre');
const inputContrasena = document.getElementById('contrasena');
const inputFechaNacimiento = document.getElementById('fechaNacimiento');
const inputsIntereses = document.querySelectorAll('input[name="intereses"]');
const inputsGenero = document.querySelectorAll('input[name="genero"]');
const botonEnviar = document.getElementById('botonEnviar');

const errorNombre = document.getElementById('errorNombre');
const errorContrasena = document.getElementById('errorContrasena');
const errorFechaNacimiento = document.getElementById('errorFechaNacimiento');
const errorIntereses = document.getElementById('errorIntereses');
const errorGenero = document.getElementById('errorGenero');

function validarNombre() {
    const nombre = inputNombre.value.trim();
    if (nombre.length < 3) {
        errorNombre.textContent = 'el nombre debe tener al menos 3 caracteres';
        return false;
    }
    errorNombre.textContent = '';
    return true;
}

function validarContrasena() {
    const contrasena = inputContrasena.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!regex.test(contrasena)) {
        errorContrasena.textContent = 'la contrasena debe tener al menos 8 caracteres incluir una mayuscula una minuscula y un numero';
        return false;
    }
    errorContrasena.textContent = '';
    return true;
}

function validarFechaNacimiento() {
    const fechaNacimiento = new Date(inputFechaNacimiento.value);
    const hoy = new Date();
    //calcular edad
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    if (isNaN(fechaNacimiento.getTime()) || edad < 18 || (edad === 18 && hoy < new Date(fechaNacimiento.setFullYear(hoy.getFullYear())))) {
        errorFechaNacimiento.textContent = 'debes tener al menos 18 anos';
        return false;
    }
    errorFechaNacimiento.textContent = '';
    return true;
}

function validarIntereses() {
    const seleccionado = Array.from(inputsIntereses).some(input => input.checked);
    if (!seleccionado) {
        errorIntereses.textContent = 'debes seleccionar al menos un interes';
        return false;
    }
    errorIntereses.textContent = '';
    return true;
}

function validarGenero() {
    const seleccionado = Array.from(inputsGenero).some(input => input.checked);
    if (!seleccionado) {
        errorGenero.textContent = 'seleccionar genero no es obligatorio pero considera elegir uno';
    } else {
        errorGenero.textContent = '';
    }
    return true;
}

function validarFormulario() {
    const esNombreValido = validarNombre();
    const esContrasenaValida = validarContrasena();
    const esFechaNacimientoValida = validarFechaNacimiento();
    const sonInteresesValidos = validarIntereses();
    validarGenero();
    botonEnviar.disabled = !(esNombreValido && esContrasenaValida && esFechaNacimientoValida && sonInteresesValidos);
}

inputNombre.addEventListener('input', validarFormulario);
inputContrasena.addEventListener('input', validarFormulario);
inputFechaNacimiento.addEventListener('input', validarFormulario);
inputsIntereses.forEach(input => input.addEventListener('change', validarFormulario));
inputsGenero.forEach(input => input.addEventListener('change', validarFormulario));

document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    if (botonEnviar.disabled) {
        validarFormulario();
    } else {
        alert('formulario enviado correctamente');
    }
});
