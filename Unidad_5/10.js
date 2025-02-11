function contadorVisitas() {
    // Obtén el contador actual del localStorage
    let visitas = localStorage.getItem("contadorVisitas");

    //inicializarlo en 0
    if (visitas === null) {
        visitas = 0;
    } else {
        visitas = parseInt(visitas);
    }

    visitas++;

    // Actualiza el contador en localStorage
    localStorage.setItem("contadorVisitas", visitas);

    // Muestra el número de visitas en la página
    document.getElementById("contador").innerText = `Has visitado esta página ${visitas} veces.`;
}

// Llama a la función cuando se carga la página
window.onload = contadorVisitas;