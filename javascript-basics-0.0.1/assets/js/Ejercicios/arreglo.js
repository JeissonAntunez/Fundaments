const readline = require('readline');

const imprimir = (dato) => {
  console.log(dato);
};

let semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Por favor, ingresa un número entre 0 y 6: ", (respuesta) => {
  const numero = parseInt(respuesta, 10); // Convertir la entrada a número

  if (numero >= 0 && numero <= 6) {
    imprimir(semana[numero]); // Usar el número como índice del array
  } else {
    imprimir("Escoge un número del 0 al 6");
  }

  rl.close(); // Cerrar la interfaz correctamente
});









