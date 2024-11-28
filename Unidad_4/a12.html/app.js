var lista_compra = [];
function aniadirElem(art) {
    var art = document.getElementById('art').value;
    lista_compra.push(art);
}

function eliminar1Articulo() {
    lista_compra.shift();
}

function eliminarUltimoArticulo() {
    lista_compra.pop();
}

function mostrarlista3() {
    var nueva_lista = [];
    for (let i = 0; i < 3; i++) {
        if (lista_compra[i] != undefined){
        nueva_lista.push(lista_compra[i])
        } else {
            break;
        }
        
    }
    document.getElementById('lista').innerHTML = nueva_lista;
}

const mostrarlista = () => document.getElementById('lista').innerHTML = lista_compra;
