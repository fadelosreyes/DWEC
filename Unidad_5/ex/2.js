const inputNombre = document.getElementById('nombre');
const inputContrasena = document.getElementById('contrasena');
const inputEdad = document.getElementById('edad');
const botonEnviar = document.getElementById('botonEnviar');
const inputConfirmarContraseña = document.getElementById("confirmar_contrasena");
const inputEmail = document.getElementById('email');


const errorEmail = document.getElementById('errorEmail');
const errorNombre = document.getElementById('errorNombre');
const errorContrasena = document.getElementById('errorContrasena');
const errorConfirmarContraseña = document.getElementById('errorConfirmarContraseña');
const errorEdad = document.getElementById('errorEdad');

function validarNombre() {
    const nombre = inputNombre.value.trim();
    if (nombre.length < 3) {
        errorNombre.textContent = 'el nombre debe tener al menos 3 caracteres';
        return false;
    }
    errorNombre.textContent = '';
    return true;
}

function validarEmail() {
    const emailRegex = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
    const email = inputEmail.value;
    if (emailRegex.test(email)) {
        errorEmail.textContent = 'el email esta mal';
        return false;
    }
    errorEmail.textContent = '';
    return true;
}


function validarContrasena() {
    const contrasena = inputContrasena.value;
    if (contrasena.length < 5) {
        errorContrasena.textContent = 'la contrasena debe tener al menos 5 caracteres';
        return false;
    }
    errorContrasena.textContent = '';
    return true;
}

function validarConfirmarContraseña() {
    const contrasena = inputContrasena.value;
    const confirmaContrasena = inputConfirmarContraseña.value;
    if (confirmaContrasena != contrasena){
        errorConfirmarContraseña.textContent = 'las contraseñas no son iguales';
        return false;
    }
    errorConfirmarContraseña.textContent = '';
    return true;
}

function validarContrasena() {
    const contrasena = inputContrasena.value;
    if (contrasena.length < 5) {
        errorContrasena.textContent = 'la contrasena debe tener al menos 5 caracteres';
        return false;
    }
    errorContrasena.textContent = '';
    return true;
}


function validarFechaNacimiento() {
    const edad = inputEdad.value;
    if (edad < 18 ) {
        errorEdad.textContent = 'debes tener al menos 18 años';
        return false;
    }
    errorEdad.textContent = '';
    return true;
}

function validarFormulario() {
    const esNombreValido = validarNombre();
    const esContrasenaValida = validarContrasena();
    const esFechaNacimientoValida = validarFechaNacimiento();
    const esConfirmarContrasenaValida = validarConfirmarContraseña();
    const esEmailValido = validarEmail();


    botonEnviar.disabled = !(esNombreValido && esEmailValido && esContrasenaValida && esFechaNacimientoValida && esConfirmarContrasenaValida);
}

inputNombre.addEventListener('blur', validarFormulario);
inputContrasena.addEventListener('blur', validarFormulario);
inputEdad.addEventListener('blur', validarFormulario);
inputEmail.addEventListener('blur', validarFormulario);
inputConfirmarContraseña.addEventListener('blur', validarFormulario);

document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    if (botonEnviar.disabled) {
        validarFormulario();
    } else {
        alert('Registro correcto');
    }
});
            