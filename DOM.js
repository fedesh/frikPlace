//ALL = cuando queremos traer muchos elementos 
//${} = me permite colocar codigos dentro de los strings
// para hacer el acento invertido (``) es Ctrl + Alt dos veces
//cloneNode = se puede aplicar para todos los nodos; hace una copia, si pongo (true) copia todos los nodos y hijos que contenga a dentro.



const image5 = [ 

  {image21 : '"../imagenes/yamcha.jpg"'},
  {image31 : '"../imagenes/figura_broly.jpg"'},
  {image41 :'"../imagenes/figura_freezer.jpg"',
}];
let image6 =`<img src=${image5} />`


 let linkImage = '"../imagenes/yamcha.jpg"'
 let image =`<img src=${linkImage} />`


 
 
 let linkImage2 = '"../imagenes/figura_broly4.jpg"'
 let image2 = `<img src=${linkImage2} />`


let alt = document.createElement('alt')
  alt = "figura"
let yamcha = document.createElement('h2')
   yamcha = "yamcha"
let figuras = document.createElement('p')
   figuras = "Figura"
   
for (let index = 0; index < 3; index++) {
  
  
  const newElement = document.createElement("div");
  document.querySelector("#main-grid").append(newElement);
  newElement.innerHTML = `${image6}
  <h2>
  ${yamcha}
  </h2>
  <p>
  ${figuras}
  </p>`
  newElement.classList.add("content-div");
}


for (let index = 0; index < 1; index++) {
  
  
  const newElement = document.createElement("div");
  document.querySelector("#main-grid").append(newElement);
  newElement.innerHTML = `${image2}
  <h2>
  ${yamcha}
  </h2>
  <p>
  ${figuras}
  </p>`
  newElement.classList.add("content-div");
} 



