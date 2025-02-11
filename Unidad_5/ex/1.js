const colores = {
    '0': 'yellow',
    '1': 'red',
    '2': 'blue',
    '3': 'green',
}

function cambiacolor() {
    const body = document.getElementById('body');
    const color = parseInt(Math.random() * 4);
    if (color) {
        body.style.backgroundColor = colores[color];
    }
    document.addEventListener("dblclick", () => {
        body.style.backgroundColor = "";
    });
}


function actualizarVistaPrevia() {
    const texto = document.getElementById("texto").value;
    // Actualización en tiempo real de la vista previa
    document.getElementById("preview").textContent = texto;
}

document.addEventListener("keydown", (evento) => {
    if (evento.key === "a") {
        document.getElementById("texto").textContent = "";
    }
});