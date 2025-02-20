document.addEventListener("DOMContentLoaded", function() { // Espera a que el DOM cargue completamente, sino hacemos esto no va a ir
    let form = document.getElementById("userForm"); // Obtiene el formulario
    let tabla = document.getElementById("tablaUsuarios"); // Obtiene el cuerpo de la tabla

    form.addEventListener("submit", function(event) { // Evento cuando se envía el formulario
        event.preventDefault(); // Evita que la página se recargue, es necesario sino al recargarse se resteara la tabla

        let nombre = document.getElementById("nombre").value; // Obtiene el valor del nombre
        let edad = document.getElementById("edad").value; // Obtiene el valor de la edad

        if (nombre.trim() === "" || edad.trim() === "") return; // Verifica que no estén vacíos

        let fila = document.createElement("tr"); // Crea una nueva fila

        let celdaNombre = document.createElement("td"); // Crea la celda para el nombre
        celdaNombre.textContent = nombre; // Asigna el texto del nombre
        fila.appendChild(celdaNombre); // Agrega la celda a la fila

        let celdaEdad = document.createElement("td"); // Crea la celda para la edad
        celdaEdad.textContent = edad; // Asigna el texto de la edad
        fila.appendChild(celdaEdad); // Agrega la celda a la fila

        let celdaAcciones = document.createElement("td"); // Crea la celda para las acciones
        let botonEliminar = document.createElement("button"); // Crea el botón "Eliminar"
        botonEliminar.textContent = "Eliminar"; // Asigna el texto al botón

        botonEliminar.addEventListener("click", function() { // Evento cuando se hace clic en "Eliminar"
            fila.remove(); // Elimina la fila
        });

        celdaAcciones.appendChild(botonEliminar); // Agrega el botón a la celda de acciones
        fila.appendChild(celdaAcciones); // Agrega la celda a la fila

        tabla.appendChild(fila); // Agrega la fila a la tabla

        form.reset(); // Resetea los campos del formulario
    });
});
