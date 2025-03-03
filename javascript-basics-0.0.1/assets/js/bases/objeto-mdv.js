

let miName = {
    nombre: "Jeisson",
    apellido : "Gonzales Antunez",
    edad : 22,
    trabajo : "Tottus",
    deporte : "Tennis"
}

imprimir({miName});
imprimir(miName);


function imprimir(... dato){
    console.log(... dato);
}

imprimir("---------------------------\n");
imprimir("---------------------------\n");
const  nuevoObjeto = Object.create(miName);

imprimir(nuevoObjeto.edad);
imprimir(miName.edad);
imprimir(nuevoObjeto);
// Object.defineProperty(obj, prop, descriptor)

imprimir("---------------------------\n");

Object.defineProperty(nuevoObjeto, "pais", {
    value: "Perú",
    writable: false, // No se puede modificar
    enumerable: true, // Se muestra en los `for...in`
    configurable: true // No se puede eliminar ni reconfigurar
});

imprimir(nuevoObjeto);
nuevoObjeto.pais = "Argentina";
imprimir(nuevoObjeto);

imprimir("---------------------------\n");
imprimir("---------------------------\n");
let entriesObject = Object.entries(miName);
imprimir(entriesObject);
Object.defineProperty(miName, "pais", {
    value : "Perú",
    writable : false, // no se podra modificar
    enumerable : true,
    configurable : true
});

imprimir("---------------------------\n");
imprimir(entriesObject);
imprimir(miName);
miName.pais = "Argentina";
imprimir(miName);

imprimir(entriesObject.length);


//Object.freeze() en general no se podra cambiar ni borrar sus propiedades

// Object.freeze(miName);
miName.apellido = "Felix";

imprimir(miName);
imprimir("---------------------------\n");
imprimir(entriesObject);
let fromEntries = Object.fromEntries(entriesObject);

imprimir(fromEntries);
