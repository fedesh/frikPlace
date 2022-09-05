//ALL = cuando queremos traer muchos elementos 
//${} = me permite colocar codigos dentro de los strings
// para hacer el acento invertido (``) es Ctrl + Alt dos veces

let image = new Image (300, 300);
 image.src = "./imagenes/yamcha.jpg;"
let alt = document.createElement('alt')
  alt = "figura"
let yamcha = document.createElement('h2')
   yamcha = "yamcha"
   console.log(image)
for (let index = 0; index < 3; index++) {
    const newElement = document.createElement("div");
    document.querySelector("#main-grid").append(newElement);
      newElement.innerHTML = `<img src= "${image}" ${alt}>
      <h2>
        ${yamcha}
      </h2>
      <p>
        nombre
      </p>`
      newElement.classList.add("content-div");
    }



    
