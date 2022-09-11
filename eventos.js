/*document.addEventListener("DOMContentLoaded", () => {
    console.log ("el documento se a cargado" )
   
});

const boton = document.querySelector('.carrito');
boton.addEventListener('click', () => {
    console.log("click");

});*/




const botonnes = document.querySelectorAll('.carrito')
const carrito = document.getElementById('main-grid')

carrito.addEventListener('click',(e)=>{
    console.log(e.target.classList.contains('carrito'))
    let value = e.target.classList.contains('carrito') 

    if(value){
        e.target.classList.toggle('changeColor')
    }


     
    e.stopImmediatePropagation();
})