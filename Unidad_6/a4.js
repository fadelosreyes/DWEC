 // Función para registrar los datos de los alumnos
 function registrarDatos() {
    let alumnosNotas = []; // Array multidimensional

    // Recoger los datos de 5 alumnos
    for (let i = 0; i < 5; i++) {
        let nombre = prompt("Introduce el nombre del alumno " + (i + 1));
        let nota1 = parseFloat(prompt("Introduce la nota del módulo 1 para " + nombre));
        let nota2 = parseFloat(prompt("Introduce la nota del módulo 2 para " + nombre));
        let nota3 = parseFloat(prompt("Introduce la nota del módulo 3 para " + nombre));

        // Almacenar los datos del alumno en el array multidimensional
        alumnosNotas.push([nombre, nota1, nota2, nota3]);
    }

    // Generar la tabla para mostrar los datos
    mostrarTabla(alumnosNotas);
}

// Función para generar y mostrar la tabla con los resultados
function mostrarTabla(alumnosNotas) {
    // Obtener el contenedor de la tabla
    const contenedor = document.getElementById('tablaResultados');

    // Crear la tabla
    let tabla = document.createElement('table');
    tabla.setAttribute('border', '1');
    tabla.setAttribute('style', 'border-collapse: collapse; width: 100%;');

    // Crear el encabezado de la tabla
    let thead = document.createElement('thead');
    let filaEncabezado = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.textContent = 'Alumno';
    let th2 = document.createElement('th');
    th2.textContent = 'Nota módulo 1';
    let th3 = document.createElement('th');
    th3.textContent = 'Nota módulo 2';
    let th4 = document.createElement('th');
    th4.textContent = 'Nota módulo 3';

    // Añadir las celdas al encabezado
    filaEncabezado.appendChild(th1);
    filaEncabezado.appendChild(th2);
    filaEncabezado.appendChild(th3);
    filaEncabezado.appendChild(th4);
    thead.appendChild(filaEncabezado);
    tabla.appendChild(thead);

    // Crear el cuerpo de la tabla (tbody)
    let tbody = document.createElement('tbody');

    // Recorrer el array y añadir los datos de los alumnos
    alumnosNotas.forEach(function(alumno) {
        let fila = document.createElement('tr');

        let celdaNombre = document.createElement('td');
        celdaNombre.textContent = alumno[0]; //Nombre del alumno
        fila.appendChild(celdaNombre);

        let celdaNota1 = document.createElement('td');
        celdaNota1.textContent = alumno[1]; //Nota módulo 1
        fila.appendChild(celdaNota1);

        let celdaNota2 = document.createElement('td');
        celdaNota2.textContent = alumno[2]; //Nota módulo 2
        fila.appendChild(celdaNota2);

        let celdaNota3 = document.createElement('td');
        celdaNota3.textContent = alumno[3]; //Nota módulo 3
        fila.appendChild(celdaNota3);

        tbody.appendChild(fila);
    });

    //Añadir el cuerpo a la tabla
    tabla.appendChild(tbody);

    //Añadir la tabla al contenedor
    contenedor.innerHTML = '';  //Limpiar antes de generar la nueva tabla
    contenedor.appendChild(tabla);
}