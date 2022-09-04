//ALL = cuando queremos traer muchos elementos 
//${} = me permite colocar codigos dentro de los strings
// para hacer el acento invertido (``) es Ctrl + Alt dos veces

const image = document.createElement('img');
image.src = '/imagenes/figura_freezer.jpg';

for (let index = 0; index < 3; index++) {
      
      const newElement = document.createElement("div");
      document.querySelector("#main-grid").append(newElement);
      newElement.innerHTML = `${image};
      <h2>
        remera
      </h2>
      <p>
        nomrbe
      </p>`
      newElement.classList.add("content-div");
    }



    
