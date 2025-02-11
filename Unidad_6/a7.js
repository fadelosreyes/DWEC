function recorrerDOM(node, indent = "") { // Función recursiva para recorrer el DOM, 'node' es el nodo que se procesa y 'indent' es el espacio de sangría
    let domString = ""; // Variable donde se mete el string con la estructura del DOM
    if (node.nodeType === 1) { // Si el nodo es un elemento HTML (etiqueta)
        domString += indent + "<" + node.nodeName.toLowerCase(); // Agrega la etiqueta del nodo al string en minuscula ya que te la devuelve en mayuscula
        if (node.attributes.length > 0) { // Si el nodo tiene atributos
            Array.from(node.attributes).forEach(attr => { // Convierte los atributos del nodo a un array y recorre cada uno
                domString += ` ${attr.name}="${attr.value}"`; // Añade el atributo al string
            });
        }
        domString += ">\n"; // Cierra la etiqueta de apertura

        Array.from(node.childNodes).forEach(child => { // Recorre los nodos hijos del nodo actual
            domString += recorrerDOM(child, indent + "  "); // Llama recursivamente a recorrerDOM para cada hijo, añadiendo más indentación
        });

        domString += indent + "</" + node.nodeName.toLowerCase() + ">\n"; // Cierra la etiqueta del nodo actual
    } else if (node.nodeType === 3) { // Si el nodo es un nodo de texto
        domString += indent + node.nodeValue.trim() + "\n"; // Agrega el valor del texto al string
    }
    return domString; // Retorna el string con la estructura del DOM
}

function mostrarDOM() { // Función para mostrar todo el DOM
    let domString = recorrerDOM(document.documentElement); // Inicia la llamada recursiva desde el nodo <html>
    document.getElementById("domDisplay").textContent = domString; // Muestra el DOM recorrido en el elemento con id "domDisplay"
}

document.getElementById("mostrarDOM").addEventListener("click", mostrarDOM);

