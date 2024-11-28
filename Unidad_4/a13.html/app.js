var tareas = [];

function añadirTareas() {
    var nombre = document.getElementById('nombre').value;
    tareas.push({ nombre: nombre, estado: false });
    listaTareas(tareas);
}

function completarTarea(i) {
    tareas[i].estado = true;
    listaTareas(tareas);
}

function eliminarTarea() {
    var nombre = document.getElementById('nombreEliminar').value;
    const i = tareas.findIndex(t => t.nombre === nombre);
    
    // Si encuentra la tarea, la elimina, si esta validacion no esta elimina la primera tarea siempre
    if (i >= 0) {
        tareas.splice(i, 1);  
    }
    
    listaTareas(tareas);  
}


function listaTareas(tareas) {
    var nueva_lista = [];
    for (let i = 0; i < tareas.length; i++) {
        nueva_lista.push(`
            <li>
                ${tareas[i].nombre} - ${tareas[i].estado ? 'Completada' : 'Pendiente'}
                <button onclick="completarTarea(${i})">Completar</button>
            </li> 
        `); //este trocito basicamente agrega un boton a la derecha de la tarea para poder cambiar la el estado de esta a completada logicamente lo hhe tenido que buscar
    }
    document.getElementById('listaTareas').innerHTML = nueva_lista.join('');
}

function filtrarTareas(tipo) {
    let tareasFiltradas = tareas;

    if (tipo === 'completadas') {
        tareasFiltradas = tareas.filter(tarea => tarea.estado === true);
    } else if (tipo === 'pendientes') {
        tareasFiltradas = tareas.filter(tarea => tarea.estado === false);
    }

    listaTareas(tareasFiltradas);
}
