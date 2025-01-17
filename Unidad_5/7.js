const image = document.getElementById("image");

//escucha el mensaje de error de la imagen
image.addEventListener("error", () => {
    alert("no se pudo cargar la imagen"); 
});
