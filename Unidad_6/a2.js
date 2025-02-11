//Añade un nuevo nodo
function agregarNodo() {
    let texto = prompt("Introduce el texto para el nuevo nodo:");
    if (texto) {
        let nuevoDiv = document.createElement("div");
        nuevoDiv.textContent = texto;
        document.getElementById("contenedor").appendChild(nuevoDiv);
    }
}
//Elimiba el ultimo nodo
function eliminarNodo() {
    let contenedor = document.getElementById("contenedor");
    if (contenedor.lastChild) {
        contenedor.removeChild(contenedor.lastChild);
    }
}