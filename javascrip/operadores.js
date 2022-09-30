//ejemplos vistos en clases

const usuario = {
    nombre:"fede shierson",
    edad: "24"
};

const registroIngreso = usuario.edad >= 18 && new Date();
//getDate = el es dia del mes 
console.log(new Date().getDate());
//getDay= es el dia de la semana
console.log(new Date().getDay());
console.log(registroIngreso)

let user ;
console.log(usuario.nombre || "el usuario no existe")
//usamos el "?" para que no se rompa y seguir usando el codigo
console.log(usuario?.nombre || "el usuario no existe")




