let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    {a:1},
    ['X','Megaman','Zero','Dr. Light',[
        'Dr. Willy',
        'Woodman'
    ],
]
];


console.log(arregloCosas[7][4][1]); // Woodman


console.log("---------------------------------");
console.log("---------------------------------");

let juegos = ['Zelda','Mario','Metroid','Chrono'];
console.log('Largo:',juegos.length);

let primero = juegos[ 2 - 2];
let ultimo = juegos[juegos.length - 1];

console.log(primero);
console.log(ultimo);
console.log({primero,ultimo});


console.log("---------------------------------");
console.log("---------------------------------");


juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr});
});

console.log("---------------------------------");
console.log("---------------------------------");


let nuevaLongitud = juegos.push('F-Zero'); // Ingresa el dato al final del arreglo
console.log({nuevaLongitud,juegos});

nuevaLongitud = juegos.unshift('Fire Emblem'); // Ingresa el dato al inicio del arreglo
console.log({nuevaLongitud,juegos});


let juegoBorrado = juegos.pop(); // Elimina el ultimo dato del arreglo
console.log({juegoBorrado,juegos});

console.log("---------------------------------");
console.log("---------------------------------");

let pos = 1;


console.log(juegos);
let juegosBorrados = juegos.splice(pos,2); // Elimina los datos segun la posicion y la cantidad de datos a eliminar
console.log({juegosBorrados,juegos});


let metroidIndex = juegos.indexOf('Metroid'); // Busca el indice del dato
console.log({metroidIndex});
