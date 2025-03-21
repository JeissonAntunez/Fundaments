


const foo =  function () {
    console.log("Foobar");
}

// Invocación usando una variable
foo();

// Pasar la función como argumento 

function diHola(){
    return "Hola";

}

function saludar(saludo, nombre){
    console.log(saludo() +  nombre);
}

// function saludar(saludo, nombre){
//     console.log(saludo +  nombre);
// }

//  Pasamos 'diHola' como argumento de la funcíon 'saludar'

// saludar(diHola(), " Javascript");
saludar(diHola, " Javascript");
console.log("\n");
console.log("__________________");
let explicacion = "Una función que pase como argumento o parametro  se llama Callback function";
console.log(explicacion.toUpperCase());
console.log("\n");
console.log("__________________");
console.log("\n");
function diHola2(){
    return function (){
        let higuer = "Una Funcion que devuelve una funcion se llama Higher Order Function";
        console.log(higuer.toUpperCase());
    }
}

diHola2()();

