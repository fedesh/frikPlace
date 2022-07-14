/*let titulo = document.getElementById("Dom")

const nombredeUsuario = prompt ("Bienvenido! ingrese su nombre de usuario:");
 titulo.innerText = "Hola " +nombredeUsuario+ "!";*/
 
 const boton = document.getElementById("compra");
 
 boton.addEventListener("click", respuestaClick);

 function respuestaClick() {
    console.log("respuesta al evento click")
 }

 const element = document.querySelector('.botones');

 element.addEventListener("click", modifyText);

 function modifyText () {
    let carrito = document.querySelector('.carrito')
    carrito.innerText = "ya fue agregado"
 }

 const productos = [
   {id: 1 , nombre: "buzo", precio: 3000},
   {id: 2 , nombre: "buzo", precio: 3000},
   {id: 3 , nombre: "buzo", precio: 3000},
   {id: 4 , nombre: "buzo", precio: 3000},
   {id: 5 , nombre: "buzo", precio: 3000},
   {id: 6 , nombre: "buzo", precio: 3000},
   {id: 7 , nombre: "buzo", precio: 3000},
   {id: 8 , nombre: "buzo", precio: 3000},
   {id: 9 , nombre: "buzo", precio: 3000},
   {id: 10 , nombre: "buzo", precio: 3000},
   {id: 11 , nombre: "buzo", precio: 3000},
   {id: 12 , nombre: "buzo", precio: 3000},
   {id: 13 , nombre: "buzo", precio: 3000},
   {id: 14 , nombre: "buzo", precio: 3000},
   {id: 15 , nombre: "buzo", precio: 3000},
   {id: 16 , nombre: "buzo", precio: 3000},
   {id: 17 , nombre: "remera", precio: 2000},
   {id: 18 , nombre: "remera", precio: 2000},
   {id: 19 , nombre: "remera", precio: 2000},
   {id: 20 , nombre: "remera", precio: 2000},
   {id: 21 , nombre: "remera", precio: 2000},
   {id: 22 , nombre: "remera", precio: 2000},
   {id: 23 , nombre: "remera", precio: 2000},
   {id: 24 , nombre: "remera", precio: 2000},
   {id: 25 , nombre: "remera", precio: 2000},
   {id: 26 , nombre: "remera", precio: 2000},
   {id: 27 , nombre: "remera", precio: 2000},
   {id: 28 , nombre: "remera", precio: 2000},
   {id: 29 , nombre: "remera", precio: 2000},
   {id: 30 , nombre: "remera", precio: 2000},
 ];
 const guardarLocal = (clave, valor) =>{
   localStorage.setItem (clave, valor);
 };

 //guardarLocal('carrito', JSON.stringify(productos));
for (const producto of productos) {
   guardarLocal( producto.nombre, JSON.stringify(producto))
}



 


