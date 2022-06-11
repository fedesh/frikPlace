/*let nombreDeUsuarios = prompt("Ingrese nombre de usuiario");

if (nombreDeUsuarios == ""){ 

    alert("nombre de usuario")
} else {
    alert("nombre de usuario ingresado: "+nombreDeUsuarios)
}
/*let numero = 1000;

if( numero < 100){
    alert("El numero es menor a 20");
} else if ( numero < 50 ){
    alert("el numero es menor a 50");
} else if ( numero < 1000 ) {
    alert("el numero es menor a 1000")
} else {
    alert ("numero es mayor a 1000")
}*/

/*for (let i = 0; i <= 5; i++){

    alert(i)
    }*/

    /*for (let i = 1; i <= 5; i++) {
        let ingreeasarNombre = prompt ("ingrese su nombre")
        alert (turno N.-)
    }*/

   /*for (let i = 1; i <= 10; i++) {
        if (i == 7 ) {
            break;
        }
        alert (i)

    }*/
    /*for (let i = 1; i <= 10; i++) {
        if (i == 5 ) {
           continue;
        }
        alert (i)

    }*/
    /*let entrada = prompt("ingrese un doto");

    while ( entrada != "ESC") {
        alert("el usuario ingreso:"+entrada);
        entrada = prompt("ingrese otro dato");
    }*/

    /*let numero = 0
    do {
        numero = prompt ("Ingrese un numero:");
    }while (parseInt(numero));*/

    //ejemplo de validacion de correo electronico
    /*let askAgain = tru;
    do {
        let userEmail = prompt("ingrese su correo electronico:");
        let userEmail = prompt("confirme su correo electronico:");
        if ( userEmail === confirmUserEmail ) {
            alert("el correo:"+userEmail+"asido guardado");
            askAgain = false;
        } else {
            alert("los correos deben ser iguales");
        }
    } while (askAgain);*/

    // mismo ejemplo
    /*let askAgain = true;

do {
    let userEmail = prompt("Ingrese su correo electrónico:");
    let confirmUserEmail = prompt("Confirme su correo electrónico:");

    if ( userEmail === confirmUserEmail ) {
        alert("El correo: "+userEmail+" a sido guardado con éxito!");
        askAgain = false;
    } else {
        alert("Los correos deben de ser iguales");
    }
} while (askAgain);*/

let producto ="";
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let seguirComprando = false;
do{
    producto = prompt ("¿queres comprar un buzo o figura?")
    producto = Number (prompt ("¿cuantos productos?"));
    switch(producto) {
        case "buzo":
        precio = 3000;
        case "figura":
            precio = 5000;
            break;
        case "ambos":
            precio = 7000;
            break;
        default:
            alert("algunos de los datos son incorrectos payaso");
            precio =0;
            cantidad = 0;
            break;
    }
    precioTotal += precio * cantidad;

    seguirComprando = confirm("¿queres seguir comprando payaso?");

}while (seguirComprando);
alert("el valor es :")
