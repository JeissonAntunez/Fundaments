let a =   10;
let b = a;
a = 30;


function imprimir(...args){
    console.log(args);
}


imprimir({a,b});

let juan = {nombre : "Juan"};
let ana = {...juan};
ana.nombre = "Ana";

imprimir({juan,ana});

// Operador express que es dentro de un objeto y rest es diferente

const cambiaNomnbre = ({ ...persona })=>{
    persona.nombre = "Tony";
    return persona;
}

let peter = {nombre:"Peter"};
let tony = cambiaNomnbre( peter );

imprimir({peter,tony});

// Arreglos

const frutas = ["Manzana","Pera","Piña"];


console.time("slice");
const otrasFrutas = frutas.slice();
console.timeEnd("slice");


console.time("spread");
const otrasFrutas2 = [...frutas];
console.timeEnd("spread");


otrasFrutas.push("Mango");

console.table({frutas , otrasFrutas});