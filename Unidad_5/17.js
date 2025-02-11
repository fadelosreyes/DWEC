window.onload = function () {
    const mensajeBienvenida = document.createElement("div");
    mensajeBienvenida.textContent = "¡Bienvenido! Completa la encuesta para ayudarnos.";
    mensajeBienvenida.style.position = "fixed";
    mensajeBienvenida.style.top = "20px";
    mensajeBienvenida.style.left = "50%";
    mensajeBienvenida.style.transform = "translateX(-50%)";
    mensajeBienvenida.style.padding = "10px 20px";
    mensajeBienvenida.style.backgroundColor = "#4CAF50";
    mensajeBienvenida.style.color = "#fff";
    mensajeBienvenida.style.borderRadius = "5px";
    mensajeBienvenida.style.fontSize = "16px";
    mensajeBienvenida.style.fontWeight = "bold";
    mensajeBienvenida.style.zIndex = "1000";
    document.body.appendChild(mensajeBienvenida);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeBienvenida.remove();
    }, 3000);
};

const selectElement = document.querySelector(".color");

selectElement.addEventListener("change", (event) => {
   confirm("Has elegido el color " + event.target.value);
});



function actualizarVistaPrevia() {
    const nombre = document.getElementById("nombre").value;
    const color = document.getElementById("color").value;
    const notificaciones = document.getElementById("notificaciones").checked;

    // Actualización en tiempo real de la vista previa
    document.getElementById("previewNombre").textContent = "Nombre: " + (nombre ? nombre : "(pendiente)");
    document.getElementById("previewColor").textContent = "Color favorito: " + (color ? color : "(pendiente)");
    document.getElementById("previewNotificaciones").textContent = "Recibir notificaciones: " + (notificaciones ? 'Sí' : 'No');    
}

function validarFormulario(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const color = document.getElementById("color").value;
    const notificaciones = document.getElementById("notificaciones").checked;

    // Validación del campo Nombre
    if (!nombre.trim()) {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    // Validación del campo Color favorito
    if (!color) {
        alert("Por favor, selecciona un color favorito.");
        return;
    }

    // Actualización del resumen
    const resumen = `
        Nombre: ${nombre}
        Color favorito: ${color}
        ¿Recibir notificaciones? ${notificaciones ? 'Sí' : 'No'}
    `;
    document.getElementById("resumen").textContent = resumen;

    // Mostrar un mensaje de éxito
    alert("Formulario enviado correctamente.");
}