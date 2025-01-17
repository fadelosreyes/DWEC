window.onload = function (){
    //desactiva un evento
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });
};