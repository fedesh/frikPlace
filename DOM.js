//ALL = cuando queremos traer muchos elementos 
//${} = me permite colocar codigos dentro de los strings


    for (let index = 0; index < 4; index++) {
      
      const newElement = document.createElement("div");
      document.querySelector("#main-grid").append(newElement);
      newElement.innerHTML = '<img src="../imagenes/figura_trunks4.jpg" alt="remera">, <h2> Figura Trunks </h2>, <p> Precio:</p>';
      newElement.classList.add("content-div");
    }



    
