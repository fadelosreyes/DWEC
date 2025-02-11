function toggleInputs() {
    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let mensaje = document.getElementById('mensaje');

    //Comprobar si los inputs están habilitados y cambiar su estado
    if (nombre.disabled || email.disabled || mensaje.disabled) {
        //Si están deshabilitados, habilitarlos
        nombre.disabled = false;
        email.disabled = false;
        mensaje.disabled = false;
    } else {
        //Si están habilitados, deshabilitarlos
        nombre.disabled = true;
        email.disabled = true;
        mensaje.disabled = true;
    }
}