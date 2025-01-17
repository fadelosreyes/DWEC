//valor de los botones por defecto para que se pasa como el nombre en vez del nuemro
const botones = {
    0: "boton izquierdo",
    1: "rueda central",
    2: "boton derecho"
};
window.onload = function (){
    //al clickar muestra con que boton has clickado 
    document.addEventListener("mousedown", (evento) => {
        alert(`has clickado con ${botones[evento.button]}`);
    });
};