//ALL = cuando queremos traer muchos elementos 
//${} = me permite colocar codigos dentro de los strings
// para hacer el acento invertido (``) es Ctrl + Alt dos veces
//cloneNode = se puede aplicar para todos los nodos; hace una copia, si pongo (true) copia todos los nodos y hijos que contenga a dentro.



/*const image5 = [ 

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
} */


const products = document.querySelector("#main-grid")

function createDivs([img,product,category,talles,precio,offer]){
let code = `
<div class="content-div">
      <img src="${img}" alt="${product}">
      <h2>
        ${category}
      </h2>
      <p>
        ${talles}
      </p>
      <p>
        ${precio}
      </p>
      <div class="botones"> 
        <button id="compra"> Comprar </button> <button class="carrito"> Agregar Carrito </button>
      </div>
    </div>`;
    products.innerHTML += code;
}

let Div1 = ["../imagenes/figura_majinboo2.jpg",
"figura",
"figura magin boo",
"Medida: 25 cm",
"Precio $3000",
];

let Div2 = ["../imagenes/buzo.jpg",
"Buzo",
"Buzo",
"Talle : XL,XXL",
"precio: $3000",
];

let Div3 = ["../imagenes/buzo11.png",
"Buzo",
"Buzo",
"Talle : XL,XXL",
"precio: $3000",
];

let Div4 = ["../imagenes/buzo12.jpg",
"Buzo",
"Buzo Luffy",
"Talle : L,XL,XXL",
"precio: $2700",
];

let Div5 = ["../imagenes/buzo13.png",
"Buzo",
"Buzo PlayStation",
"Talle : L,XL,XXL",
"precio: $2700",
];

let Div6 = ["../imagenes/buzo14.jpg",
"Buzo",
"Buzo Ahegao",
"Talle : XL,XXL",
"precio: $3000",
];
let Div7 = ["../imagenes/buzo15.jpg",
"Buzo",
"Buzo Anti-Social Club",
"Talle : L,XL,XXL",
"precio: $2700",
];

let Div8 = ["../imagenes/buzo16.jpg",
"Buzo",
"Buzo Sasuke-Naruto",
"Talle : L,XL,XXL",
"precio: $2700",
];

createDivs(Div1);
createDivs(Div2);
createDivs(Div3);
createDivs(Div4);
createDivs(Div5);
createDivs(Div6);
createDivs(Div7);
createDivs(Div8);
createDivs(Div9);
createDivs(Div10);
createDivs(Div11);
createDivs(Div12);
createDivs(Div13);
createDivs(Div14);
createDivs(Div15);
