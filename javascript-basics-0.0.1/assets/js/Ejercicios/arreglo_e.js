
function sumaLista(lista){
    let suma = 0;
    for(let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma;
}

sumaLista([1,2,3,4,5,6,7,8,9,10]);

console.log(sumaLista([1,2,3,4,5,6,7,8,10])); // 55


console.log("---------------------------------");


const readline = require('readline');

function leerNumeros(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let numeros = [];

    function preguntar() {
        rl.question("Introduce un número (0 para terminar): ", (input) => {
            let numero = Number(input);

            if (isNaN(numero)) {
                console.log("Valor no numérico. Inténtalo de nuevo.");
                preguntar();
            } else if (numero === 0) {
                rl.close();
                callback(numeros);
            } else {
                numeros[numeros.length] = numero;
                preguntar();
            }
        });
    }

    preguntar();
}

function contarParesImpares(numeros) {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}

leerNumeros((numeros) => {
    let { pares, impares } = contarParesImpares(numeros);

    console.log("Array de entrada:", numeros);
    console.log("Números pares:", pares);
    console.log("Números impares:", impares);
});