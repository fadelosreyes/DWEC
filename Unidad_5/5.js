window.onload = function () {
    let imagen = document.getElementById('img');
    //cuando se pulsa la tecla del raton carga una imagen
    document.addEventListener("mousedown", () => {
        imagen.src = "aguacate.jpeg";
    })
    //cuando se suelta una tecla del raton se carga otra imagen
    document.addEventListener("mouseup", () => {
        imagen.src = "e5a978b8-6772-4c85-a50e-15581af7d483.png";
    })
}