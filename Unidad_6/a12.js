document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("tableBody");
    const botonFila = document.getElementById("anadirFila");

    // Función para crear una fila nueva
    function anadirFila() {
        const fila = document.createElement("tr");

        for (let i = 0; i < 3; i++) {
            const celda = document.createElement("td");
            celda.textContent = "Click para editar";
            celda.addEventListener("click", makeCellEditable);
            fila.appendChild(celda);
        }

        // Celda con botón de eliminar
        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => fila.remove());
        deleteCell.appendChild(deleteButton);
        fila.appendChild(deleteCell);

        tableBody.appendChild(fila);
    }

    // Función para hacer la celda editable
    function makeCellEditable(event) {
        const celda = event.target;
        const originalText = celda.textContent;
        const input = document.createElement("input");
        input.type = "text";
        input.value = originalText;

        // Guardar cambios con "Enter" o restaurar con "Escape"
        input.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                celda.textContent = input.value;
            } else if (event.key === "Escape") {
                celda.textContent = originalText;
            }
        });

        // Guardar cambios al perder el foco (blur)
        input.addEventListener("blur", () => {
            celda.textContent = input.value;
        });

        celda.textContent = "";
        celda.appendChild(input);
        input.focus();
    }

    // Evento para añadir una fila al hacer clic en el botón
    botonFila.addEventListener("click", anadirFila);
});
