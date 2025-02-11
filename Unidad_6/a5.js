function toggleParrafo(id) {
    let parrafo = document.getElementById(id);

    //Comprobar el estado actual del display
    if (parrafo.style.display === "none") {
        //Si está oculto, lo mostramos
        parrafo.style.display = "block";
    } else {
        //Si está visible, lo ocultamos
        parrafo.style.display = "none";
    }
}