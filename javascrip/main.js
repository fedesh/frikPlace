//ejercicio de clase 2

/*const username = 'Fede'
const password = '12345'
const NUMERO = 12345

const usernameLogin = prompt("Ingrese el usuario")
const passwordLogin = prompt("Ingrese el password")

if (usernameLogin === username && passwordLogin === password){
   alert(username + NUMERO + password)
} else{
   alert('401 unauthorized')
}*/
/*for (let i = 1; i <=20; i++) {
   let ingresarNombre = prompt ("ingresar Nombre");
   let ingresarEdad = prompt ("Edad:");
   if (ingresarEdad <= 17){
      alert ("menor de edad!")
      break;
   }
   alert(" turno para edicion WoW n° "+i+" -Nombre: " +ingresarNombre+ "//Edad: " +ingresarEdad);
   break;
}*/



/*const personal = {
   funciona: "si",
   date:{
   Nombre: "federico",
   Apellido: "shierson",
   edad:"24",},
   Direccion:{
      pais:"Argentina",
      ciudad:"villa maria",
      calle:"blv Sarmiento",
   }
}
console.log(personal.funciona)
console.log(personal.date)
console.log(personal.Direccion)*/


class mercaderia{
   constructor(color, talle, precio){
   this.color = color;
   this.talle = talle;
   this.precio = precio;
   }
}
const mercaderia1 = new mercaderia("negro","XL","$4000");
console.log(mercaderia1)

                //carrusel 1

const carrusel = document.querySelector(".carrusel-items")

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;

const start = () =>{
   intervalo = setInterval (function (){
      carrusel.scrollLeft = carrusel.scrollLeft + step;
      if (carrusel.scrollLeft === maxScrollLeft){
         step = -1;
      }else if (carrusel.scrollLeft === 0){
         step =  1;
      }
   }, 10);
      
   };



const stop = () =>{
   clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () =>{
   stop()
});

carrusel.addEventListener("mouseout", () => {
   start();
})
start();

// fetch







   


      










