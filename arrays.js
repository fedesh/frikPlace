//.push("") = agrega elemento al final
//.UNSHIFT("") = agrega elemento al principio
//.splice("") = agrega elemento en cualquier posicion (tenemos que definir donde)
//.shift("") = elimina el primer elemento
//.pop() = quita el ultimo elemento
//.length = es una propiedad y es para saber la longitud de nuestro array (ej:consol.log(numbers.length))
//.at = recibe la posicion donde quiero acceder(ej:number.at(2)),podemos agregar numeros negativosy acceder al ultimo con un -1 por ejemplo
//.indexOf("") = lo que hace es buscar el elemento y nos devuelve la posicion en la que esta; (si aparece "-1" es que el elemento no existe)
//.fill("",--,) = lo que hace es llenar los elemento con la palabra que ponemos
//... = (operador spread) es muy potente, puede sumar, agregar, etc. [ver mas a detalle]
let talles = ["L","X","XL"]
talles.push("XXL");
talles.unshift("S");
talles.splice(1,0,"M")

console.log(talles);
console.log(talles.indexOf("XL"))