function enviarDatos(event) {
    // Evita que la página se recargue
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    const color = document.querySelector('input[name="color"]:checked')?.value;
    const asignatura = document.getElementById('asignatura').value;

    const diasDisponibles = Array.from(document.querySelectorAll('input[name="dias"]:checked'))
        .map(el => el.value)
        .join(', ');

    const diaPreferente = ultimoDiaSeleccionado || document.getElementById('diaPreferente').value;

    const queryString = `nombre=${nombre}&mensaje=${mensaje}&color=${color}&asignatura=${asignatura}&diasDisponibles=${diasDisponibles}&diaPreferente=${diaPreferente}`;

    // Abrir la página con los datos pasados
    window.open(`8.1.html?${queryString}`);
}

let ultimoDiaSeleccionado = null;

// Obtener todos los checkboxe
const checkboxes = document.querySelectorAll('input[name="dias"]');

// Actualizar el último día seleccionado al hacer clic
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        ultimoDiaSeleccionado = checkbox.value;
    });
});

function cambiarColorFondo() {
    const colores = document.getElementsByName("color");
    let colorSeleccionado = "";

    // mira el color que esta cheked y lo mete en una varivale
    for (let color of colores) {
        if (color.checked) {
            colorSeleccionado = color.value;
            break;
        }
    }

    // Cambiar el fondo del formulario
    const formulario = document.getElementById("miFormulario");
    switch (colorSeleccionado) {
        case "rojo":
            formulario.style.backgroundColor = "red";
            break;
        case "azul":
            formulario.style.backgroundColor = "blue";
            break;
        case "verde":
            formulario.style.backgroundColor = "green";
            break;
        default:
            formulario.style.backgroundColor = "white";
    }
}