function validarFormulario(event) {
    event.preventDefault(); // Evita el envío por defecto si hay errores

    const dni = document.getElementById("dni").value;
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const web = document.getElementById("web").value;
    const contrasena = document.getElementById("contrasena").value;
    const confirmarContrasena = document.getElementById("confirmar_contrasena").value;

    const dniRegex = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[A-Z]$/;
    const nombreRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ]{2,}(\s[A-Za-záéíóúÁÉÍÓÚñÑ]{2,}){1,3}$/;
    const fechaRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
    const webRegex = /^https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}$/;

    if (!dniRegex.test(dni)) {
        alert("El DNI ingresado no es válido. Formato: 99.999.999-X");
        return;
    }

    if (!nombreRegex.test(nombre)) {
        alert("El nombre debe contener al menos un nombre y un apellido");
        return;
    }

    if (!fechaRegex.test(fecha)) {
        alert("La fecha debe tener el formato dd/mm/yyyy");
        return;
    }

    if (!webRegex.test(web)) {
        alert("La pagina web debe tener un formato valido, por ejemplo: http://www.ejemplo.com");
        return;
    }

    if (contrasena.length < 8 || contrasena.length > 10) {
        alert("La contraseña debe tener entre 8 y 10 caracteres");
        return;
    }

    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no son iguales");
        return;
    }

    alert("Formulario enviado correctamente.");
}


//ver contraseñas
function verContrasena() {
    const contrasena = document.getElementById("contrasena");
    const confirmarContrasena = document.getElementById("confirmar_contrasena");

    // Alterna entre mostrar y ocultar la contraseña
    if (contrasena.type === "password") {
        contrasena.type = "text";
        confirmarContrasena.type = "text";
    } else {
        contrasena.type = "password";
        confirmarContrasena.type = "password";
    }
}
