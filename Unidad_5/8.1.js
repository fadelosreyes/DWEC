function mostrarResultado() {
    // Obtener la query string de la URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const nombre = urlParams.get('nombre');
    const mensaje = urlParams.get('mensaje');
    const color = urlParams.get('color');
    const asignatura = urlParams.get('asignatura');
    const diasDisponibles = urlParams.get('diasDisponibles');
    const diaPreferente = urlParams.get('diaPreferente');

    document.getElementById('nombre').textContent = nombre;
    document.getElementById('mensaje').textContent = mensaje;
    document.getElementById('color').textContent = color;
    document.getElementById('asignatura').textContent = asignatura;
    document.getElementById('diasDisponibles').textContent = diasDisponibles;
    document.getElementById('diaPreferente').textContent = diaPreferente;
    document.getElementById('correoProfesor').textContent = correoProfesor();
}

function correoProfesor() {
    const profesor = {
        mates: "Olga",
        lengua: "Aznar",
        FYQ: "Javier"
    };

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const asignatura = urlParams.get('asignatura');
    //verifica que la asignatura exisite 
    if (profesor[asignatura]) {
        return profesor[asignatura]; // Retornar el nombre del profesor correspondiente
    }
}

