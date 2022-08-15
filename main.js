//ejercicio de clase 2

const username = 'Fede'
const password = '12345'
const NUMERO = 12345

const usernameLogin = prompt("Ingrese el usuario")
const passwordLogin = prompt("Ingrese el password")

if (usernameLogin === username && passwordLogin === password){
   alert(username + NUMERO + password)
} else{
   alert('401 unauthorized')
   

}
for (let i = 1; i <=20; i++) {
   let ingresarNombre = prompt ("ingresar nombre");
   alert(" turno para edicion WW n° "+i+" Nombre: "+ingresarNombre);

   break;
}


