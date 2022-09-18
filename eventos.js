/*document.addEventListener("DOMContentLoaded", () => {
    console.log ("el documento se a cargado" )
   
});

const boton = document.querySelector('.carrito');
boton.addEventListener('click', () => {
    console.log("click");

});*/


//delegacion de eventos es muy util y ayuda bastante para toda la web ej:


const botonnes = document.querySelector('.carrito')
const carrito = document.getElementById('main-grid')

carrito.addEventListener('click',(e)=>{
    console.log(e.target.classList.contains('carrito'))
    let value = e.target.classList.contains('carrito') 

    if(value){
        e.target.classList.toggle('changeColor');
        //IIFE = son funciones que se ejecutan tan pronto como se definan ej: abajo
        (() => {
            const color = localStorage.getItem('colorBoton');
            if(color === true){
                botonnes.className = "green";
            }else{
                botonnes.className = color;
            }
            
        })();
    }
    localStorage.setItem('colorBoton','changeColor');


     //el stopImmediatePropagation se usa para no llmar a otros del mismo evento
     
    e.stopImmediatePropagation();
});

// probando si puedo guardar algo con localStorage

// LocalStorage = guarda cadenas de texto, clave => valor
// LocalStorage = guarda los elementos a pesar de que cierres pestañas (siempre y cuando lo tengas en javaScrip)

localStorage.setItem("token","1324");
sessionStorage.setItem("token","1324");




