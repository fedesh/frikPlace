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
for (let i = 1; i <=20; i++) {
   let ingresarNombre = prompt ("ingresar nombre");
   let ingresarEdad = prompt ("ingresar Edad");
   if (ingresarEdad.length < 2){
      alert ("menor de edad!")
   }
   alert(" turno para edicion WW n° "+i+" Nombre: "+ingresarNombre+ingresarEdad);
   

   break;
}


const personal = {
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
console.log(personal.Direccion)



