let juegos = ["Zelda","Mario","Metroid","Chrono"];
imprimir("Largo", juegos.length);
console.log("Largo", juegos.length);


function imprimir(...dato){
    console.log(...dato);
}


let primero = juegos[2 -2];
let ultimo = juegos[juegos.length -1 ];

imprimir({primero,ultimo});

juegos.forEach((elemento,indice,arr) => {
    imprimir({elemento, indice, arr});
});

// let nuevaLongitud = juegos.push( "F-Zero" );
let nuevaLongitud = juegos.unshift( "F-Zero" );
imprimir({nuevaLongitud,juegos});

let pos = 1;

juegos.splice(pos,2);
imprimir(juegos);


let metroidIndex = juegos.indexOf("Metroid");
imprimir(metroidIndex);


