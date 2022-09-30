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

// fetch
/*let data = [];
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    data = [...json];
    data = data.slice(0, 9);
    console.log(data);
    
  });*/

  /*fetch("https://dragon-ball-api.herokuapp.com/api/character/Gohan")
  .then((res) => res.json())
  then((data) => console.log(data))*/

 function traerRickMorty (){
  fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => console.log
    (data)
  );
}
traerRickMorty ()



