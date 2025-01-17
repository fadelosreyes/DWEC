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
