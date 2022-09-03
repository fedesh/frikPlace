//ALL = cuando queremos traer muchos elementos 
//${} = me permite colocar codigos dentro de los strings
// para hacer el acento invertido (``) es Ctrl + Alt dos veces

    for (let index = 0; index < 3; index++) {
      
      const newElement = document.createElement("div");
      document.querySelector("#main-grid").append(newElement);
      newElement.innerHTML = `<img src="../imagenes/figura_broly3.jpg" alt="remera">
      <h2>
        remera
      </h2>
      <p>
        Precio:
      </p>`
      newElement.classList.add("content-div");
    }



    
