const caja = document.getElementById("caja");
//pixeles que se mueve la caja
const mover = 10;

window.onload = function (){
    //mueve la caja una serie de pixeles hacia la posicion que pulses
    document.addEventListener("keydown", (evento) => {
        //se usa parseint para poder hacer operaciones ya que sino se pasa como cadena
        let top = parseInt(caja.style.top);
        let left = parseInt(caja.style.left);
        //"px" es necesario ya que cuando le haces parseint desaparece los px y se queda solo el numero
        if (evento.key === "ArrowUp" || evento.key === "8") {
            caja.style.top = (top - mover) + "px";
        } else if (evento.key === "ArrowDown" || evento.key === "2") {
            caja.style.top = (top + mover) + "px";
        } else if (evento.key === "ArrowLeft" || evento.key === "4") {
            caja.style.left = (left - mover) + "px";
        } else if (evento.key === "ArrowRight" || evento.key === "6") {
            caja.style.left = (left + mover) + "px";
        }
    });
};