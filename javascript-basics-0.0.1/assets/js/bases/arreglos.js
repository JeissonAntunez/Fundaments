

const arr = new Array(10);

console.log(arr);

// Crear un string que represente un tablero de ajedrez
function crearTableroAjedrez(tamano) {
    let tablero = "";
  
    for (let fila = 0; fila < tamano; fila++) {
      for (let columna = 0; columna < tamano; columna++) {
        // Alternar entre '#' y ' ' según la posición
        if ((fila + columna) % 2 === 0) {
          tablero += "#";
        } else {
          tablero += " ";
        }
      }
      // Añadir un salto de línea al final de cada fila
      tablero += "\n";
    }
  
    return tablero;
  }
  
  // Tamaño del tablero
  const tamano = 8;
  
  // Generar y mostrar el tablero
  console.log(crearTableroAjedrez(tamano));


let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});

console.log(videoJuegos[0]);

let valor = videoJuegos;
let numero = 5;



let imprimir = (dato)=> {
  console.log(dato);
};
console.log("----------------");
console.log("----------------");

const fruits = [];
fruits.push("banana", "apple","pech","orange","kiwi","pineapple");
imprimir(fruits);
imprimir(fruits.join());
imprimir(fruits.join('-'));
imprimir(fruits.length);
imprimir(fruits[0]);
imprimir(fruits[1]);
imprimir(fruits[2]);
imprimir(fruits[3]);
imprimir(fruits[4]);
imprimir(fruits[5]);
imprimir(fruits.slice(2));
imprimir(fruits.slice(2,5));
imprimir(fruits.slice(-4));
imprimir(fruits);

console.log("----------------");
console.log("----------------");
console.log("Array: .indexOf()")

const indices = [];
const array = ["a","b","a","c","a","a"];
const element = "a";
imprimir(array.indexOf("a",3));
let idx = array.indexOf(element);
while (idx !== -1){
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
imprimir(indices);
imprimir("Ejemplo 2:");


function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(`New veggies collection is: ${veggies}`);
  } else {
    console.log(`${veggie} already exists in the veggies collection.`);
  }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "spinach");
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, "spinach");
// spinach already exists in the veggies collection.


console.log("----------------");
console.log("----------------");
console.log("----------------");
