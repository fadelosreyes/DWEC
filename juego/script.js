const columnas = 7;
const filas = 6;
let tablero = [];

const jugador1 = { color: 'roja', nombre: 'Jugador 1' };
const jugador2 = { color: 'amarilla', nombre: 'Jugador 2' };
let jugadorActual = jugador1;

let juegoTerminado = false;

const tableroElemento = document.getElementById('tablero');
const mensajeElemento = document.getElementById('mensaje');
const botonReiniciar = document.getElementById('boton-reiniciar');

function crearTablero() {
    for (let fila = 0; fila < filas; fila++) {
        const filaArray = [];
        for (let col = 0; col < columnas; col++) {
            filaArray.push(null);
            const celda = document.createElement('div');
            celda.classList.add('celda');
            celda.dataset.columna = col;
            celda.addEventListener('click', () => manejarClick(col));
            tableroElemento.appendChild(celda);
        }
        tablero.push(filaArray);
    }
}

function manejarClick(columna) {
    if (juegoTerminado) return;

    for (let fila = filas - 1; fila >= 0; fila--) {
        if (!tablero[fila][columna]) {
            tablero[fila][columna] = jugadorActual.color;
            actualizarTablero();
            if (comprobarGanador(fila, columna)) {
                mensajeElemento.textContent = `${jugadorActual.nombre} GANÓ!`;
                juegoTerminado = true;
            } else {
                jugadorActual = (jugadorActual === jugador1) ? jugador2 : jugador1;
                mensajeElemento.textContent = `Es el turno de ${jugadorActual.nombre}`;
            }
            break;
        }
    }
}

function actualizarTablero() {
    const celdas = document.querySelectorAll('.celda');
    celdas.forEach((celda, indice) => {
        const fila = Math.floor(indice / columnas);
        const col = indice % columnas;
        if (tablero[fila][col]) {
            celda.classList.add(tablero[fila][col]);
        } else {
            celda.classList.remove('roja', 'amarilla');
        }
    });
}

function comprobarGanador(fila, columna) {
    return (
        comprobarDireccion(fila, columna, 1, 0) ||
        comprobarDireccion(fila, columna, 0, 1) ||
        comprobarDireccion(fila, columna, 1, 1) ||
        comprobarDireccion(fila, columna, 1, -1)
    );
}

function comprobarDireccion(fila, columna, dirFila, dirCol) {
    let cuenta = 1;

    let f = fila + dirFila;
    let c = columna + dirCol;
    while (f >= 0 && f < filas && c >= 0 && c < columnas && tablero[f][c] === jugadorActual.color) {
        cuenta++;
        f += dirFila;
        c += dirCol;
    }

    f = fila - dirFila;
    c = columna - dirCol;
    while (f >= 0 && f < filas && c >= 0 && c < columnas && tablero[f][c] === jugadorActual.color) {
        cuenta++;
        f -= dirFila;
        c -= dirCol;
    }

    return cuenta >= 4;
}

function reiniciarJuego() {
    tablero = [];
    juegoTerminado = false;
    jugadorActual = jugador1;
    mensajeElemento.textContent = `Es el turno de ${jugadorActual.nombre}`;
    tableroElemento.innerHTML = '';
    crearTablero();
}

botonReiniciar.addEventListener('click', reiniciarJuego);

crearTablero();
mensajeElemento.textContent = `Es el turno de ${jugadorActual.nombre}`;
