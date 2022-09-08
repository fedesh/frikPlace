//ALL = cuando queremos traer muchos elementos 
//${} = me permite colocar codigos dentro de los strings
// para hacer el acento invertido (``) es Ctrl + Alt dos veces

let linkImage = '"../imagenes/yamcha.jpg"'
let image =`<img src=${linkImage} />`
 image.src = "./imagenes/yamcha.jpg;"
let alt = document.createElement('alt')
  alt = "figura"
let yamcha = document.createElement('h2')
   yamcha = "yamcha"
let yamcha2 = document.createElement('p')
   yamcha2 = "figura"
   console.log(image)
for (let index = 0; index < 3; index++) {
    const newElement = document.createElement("div");
    document.querySelector("#main-grid").append(newElement);
      newElement.innerHTML = `${image}
      <h2>
        ${yamcha}
      </h2>
      <p>
        ${yamcha2}
      </p>`
      newElement.classList.add("content-div");
    }



    
