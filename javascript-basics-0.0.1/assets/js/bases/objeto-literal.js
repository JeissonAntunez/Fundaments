let personaje = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"], 
    direccion: {
        zip: "10880, 90265",
        ubicacion: "Malibu, California"
    },  
    ultimaPelicula: "Infinity War"
};

console.log(personaje);
console.log("Nombre:", personaje.nombre);
console.log("Nombre:", personaje['nombre']);

// Mas detalles


delete personaje.edad;
console.log(personaje);

personaje.casado = true;
console.log(personaje);

console.log("--------------");

const entriesPares = Object.entries(personaje);
console.log(entriesPares);
/// El freeze solo congela los objetos pero no los atributos dentro del objeto como array, lista, etc.
Object.freeze(personaje);
personaje.dinero = 1000000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);

console.log("--------------");
console.log("--------------");
console.log("--------------");
console.log("--------------");



const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades,valores);

