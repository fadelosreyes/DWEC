document.addEventListener("DOMContentLoaded", function() { // Espera a que el DOM esté completamente cargado
    let imagen = document.getElementById("imagen"); // Obtiene la imagen por su ID

    imagen.addEventListener("mouseover", function () { // Evento cuando el cursor pasa sobre la imagen
        imagen.setAttribute("src", "e5a978b8-6772-4c85-a50e-15581af7d483.png"); 
    });
    imagen.addEventListener("mouseout", function () { // Evento cuando el cursor se retira
        imagen.setAttribute("src", "aguacate.jpeg"); 
    });
    
});
