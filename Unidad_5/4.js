window.onload = function () {
    var mensaje = document.getElementById('mensaje');
    //cuando se pulsa un boton del raton se pone amarillo el fondo
    document.addEventListener("mousedown", () => {
        mensaje.style.backgroundColor = "#FFFF00";
    });
    //cuando se pulsa un boton del teclado se pone azul el fondo
    document.addEventListener("keydown", () => {
        mensaje.style.backgroundColor = "#CCE6FF";
    });
    //cuando se mueve el raton vuelve a su color por defecto
    document.addEventListener("mousemove", () => {
        mensaje.style.backgroundColor = "";
    });
}