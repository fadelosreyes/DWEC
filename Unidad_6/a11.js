document.addEventListener("DOMContentLoaded", () => {
    const textoEntrada = document.getElementById("textoEntrada");
    const botonAnadir = document.getElementById("anadirTarea");
    const textoLi = document.getElementById("textoLi");

    // Función para agregar una nueva tarea
    function addTask() {
        if (textoEntrada.value.trim() === "") return; // Evitar agregar tareas vacías

        const li = document.createElement("li");
        const texto = document.createElement("span");
        texto.textContent = textoEntrada.value;
        
        // Doble clic para editar la tarea
        texto.addEventListener("dblclick", () => {
            const inputEdit = document.createElement("input");
            inputEdit.type = "text";
            inputEdit.value = texto.textContent;

            inputEdit.addEventListener("keyup", (event) => {
                if (event.key === "Enter" && inputEdit.value.trim() !== "") {
                    texto.textContent = inputEdit.value;
                    li.replaceChild(texto, inputEdit);
                }
            });

            li.replaceChild(inputEdit, texto);
            inputEdit.focus();
        });

        // Botón para eliminar la tarea
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
            li.remove();
        });

        // Agregar elementos a la tarea
        li.appendChild(texto);
        li.appendChild(deleteButton);
        textoLi.appendChild(li);

        textoEntrada.value = ""; // Limpiar el input
    }

    // Evento para agregar tarea con el botón
    botonAnadir.addEventListener("click", addTask);

    // Evento para agregar tarea con "Enter"
    textoEntrada.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
