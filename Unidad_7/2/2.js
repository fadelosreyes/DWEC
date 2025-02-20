const input = document.getElementById("ciudad");
const sugerencias = document.getElementById("sugerencias");
input.addEventListener("keyup", function() {
    const query = input.value;
    if (query.length > 0) {
        fetch(`2.php?query=${query}`)
            .then(response => response.json())  // Parseamos la respuesta como JSON
            .then(data => {
                if (data.length > 0) {
                    sugerencias.textContent = data.join(", ");  // Mostrar las sugerencias como texto
                } else {
                    sugerencias.textContent = "No hay resultados";  // Mensaje si no hay coincidencias
                }
            });
    } else {
        sugerencias.textContent = "";  // Limpiar las sugerencias cuando no hay texto
    }
});

