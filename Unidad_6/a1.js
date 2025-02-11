document.addEventListener("DOMContentLoaded", function () {
    let h2 = document.createElement("h2");
    h2.textContent = "Introduce los datos de los alumnos y sus notas";
    document.body.appendChild(h2); //Añadir el título al body o a un contenedor específico

    //Crear el formulario
    let formulario = document.createElement("form");
    formulario.setAttribute("id", "formulario");

    //Crear el contenedor de los alumnos
    let contenedorAlumnos = document.createElement("div");
    contenedorAlumnos.setAttribute("id", "contenedor-alumnos");
    formulario.appendChild(contenedorAlumnos);

    //Crear el botón de registro
    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.textContent = "Registrar Datos";
    boton.setAttribute("onclick", "registrarDatos()"); // Asignar la función al evento onclick
    formulario.appendChild(boton);

    //Añadir el formulario al body o a un contenedor específico
    document.body.appendChild(formulario);

    //Crear la tabla
    let tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.setAttribute("id", "tablaResultados");

    //Crear el encabezado de la tabla
    let thead = document.createElement("thead");
    let filaEncabezado = document.createElement("tr");

    let th1 = document.createElement("th");
    th1.textContent = "Alumno";
    filaEncabezado.appendChild(th1);

    let th2 = document.createElement("th");
    th2.textContent = "Nota módulo 1";
    filaEncabezado.appendChild(th2);

    let th3 = document.createElement("th");
    th3.textContent = "Nota módulo 2";
    filaEncabezado.appendChild(th3);

    let th4 = document.createElement("th");
    th4.textContent = "Nota módulo 3";
    filaEncabezado.appendChild(th4);

    //Añadir la fila de encabezado al <thead>
    thead.appendChild(filaEncabezado);
    tabla.appendChild(thead);

    //Crear el cuerpo de la tabla (tbody)
    let tbody = document.createElement("tbody");
    tabla.appendChild(tbody);

    //Añadir la tabla al contenedor del body
    document.body.appendChild(tabla);

    //Crear los campos para los alumnos
    for (let i = 1; i <= 5; i++) {
        let divAlumno = document.createElement("div");

        let labelAlumno = document.createElement("label");
        //Establce el atributo for="alumno'i'" i representa por ejemplo alumno1,  alumno2...
        labelAlumno.setAttribute("for", "alumno" + i);
        //Asigan el texto a la etiqueta
        labelAlumno.textContent = "Nombre del alumno " + i;
        //Añade la etuiqueta al contenedor div
        divAlumno.appendChild(labelAlumno);
        //Crea un campo input
        let inputAlumno = document.createElement("input");
        //Establece los atributos...
        inputAlumno.setAttribute("type", "text");
        inputAlumno.setAttribute("id", "alumno" + i);
        inputAlumno.setAttribute("placeholder", "Nombre del alumno " + i);
        divAlumno.appendChild(inputAlumno);

        let labelNota1 = document.createElement("label");
        labelNota1.setAttribute("for", "nota" + i + "_1");
        labelNota1.textContent = "Nota módulo 1";
        divAlumno.appendChild(labelNota1);

        let inputNota1 = document.createElement("input");
        inputNota1.setAttribute("type", "number");
        inputNota1.setAttribute("id", "nota" + i + "_1");
        inputNota1.setAttribute("placeholder", "Nota módulo 1");
        divAlumno.appendChild(inputNota1);

        let labelNota2 = document.createElement("label");
        labelNota2.setAttribute("for", "nota" + i + "_2");
        labelNota2.textContent = "Nota módulo 2";
        divAlumno.appendChild(labelNota2);

        let inputNota2 = document.createElement("input");
        inputNota2.setAttribute("type", "number");
        inputNota2.setAttribute("id", "nota" + i + "_2");
        inputNota2.setAttribute("placeholder", "Nota módulo 2");
        divAlumno.appendChild(inputNota2);

        let labelNota3 = document.createElement("label");
        labelNota3.setAttribute("for", "nota" + i + "_3");
        labelNota3.textContent = "Nota módulo 3";
        divAlumno.appendChild(labelNota3);

        let inputNota3 = document.createElement("input");
        inputNota3.setAttribute("type", "number");
        inputNota3.setAttribute("id", "nota" + i + "_3");
        inputNota3.setAttribute("placeholder", "Nota módulo 3");
        divAlumno.appendChild(inputNota3);

        //Se añade todo al contenedorAlumnos es decir al formulario creado anteriormente
        contenedorAlumnos.appendChild(divAlumno);
    }
});

function registrarDatos() {
    let tabla = document.getElementById("tablaResultados").getElementsByTagName('tbody')[0];

    for (let i = 1; i <= 5; i++) {
        let nombre = document.getElementById("alumno" + i).value;
        let nota1 = document.getElementById("nota" + i + "_1").value;
        let nota2 = document.getElementById("nota" + i + "_2").value;
        let nota3 = document.getElementById("nota" + i + "_3").value;

        if (nombre.trim() !== "") {
            let fila = document.createElement("tr");

            let celdaNombre = document.createElement("td");
            celdaNombre.textContent = nombre;
            fila.appendChild(celdaNombre);

            let celdaNota1 = document.createElement("td");
            celdaNota1.textContent = nota1;
            fila.appendChild(celdaNota1);

            let celdaNota2 = document.createElement("td");
            celdaNota2.textContent = nota2;
            fila.appendChild(celdaNota2);

            let celdaNota3 = document.createElement("td");
            celdaNota3.textContent = nota3;
            fila.appendChild(celdaNota3);

            tabla.appendChild(fila);
        }
    }
}
