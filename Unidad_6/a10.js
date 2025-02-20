document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("productForm");
    const productContainer = document.getElementById("productContainer");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        // Obtener valores del formulario
        const name = document.getElementById("productName").value;
        const precio = document.getElementById("productprecio").value;
        const imageUrl = document.getElementById("productImage").value;

        // Crear tarjeta del producto
        const producto = document.createElement("div");
        producto.style.border = "1px solid #000";
        producto.style.padding = "10px";
        producto.style.margin = "10px";
        producto.style.display = "inline-block";
        producto.style.textAlign = "center";

        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = name;
        img.style.width = "100px";
        img.style.height = "100px";

        const title = document.createElement("h3");
        title.textContent = name;

        const precioTag = document.createElement("p");
        precioTag.textContent = `Precio: $${precio}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
            producto.remove();
        });

        // Agregar elementos a la tarjeta
        producto.appendChild(img);
        producto.appendChild(title);
        producto.appendChild(precioTag);
        producto.appendChild(deleteButton);

        // Añadir la tarjeta al contenedor
        productContainer.appendChild(producto);

        // Limpiar formulario
        formulario.reset();
    });
});
