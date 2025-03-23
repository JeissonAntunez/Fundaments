const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function pedirEdad() {
    rl.question('Ingrese la edad: ', (dato) => {
        let datoEntero = parseInt(dato);

        if (isNaN(datoEntero) || datoEntero <= 0) {
            console.log("Por favor, ingrese una edad válida (número entero positivo).");
            pedirEdad(); // Llamamos de nuevo a la función para que el usuario reingrese el dato
        } else {
            console.log("La edad ingresada es:", datoEntero);
            rl.close();
        }
    });
}

pedirEdad(); 