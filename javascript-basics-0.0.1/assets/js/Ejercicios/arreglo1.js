const readline = require('readline');


const imprimir = (dato) => {
    console.log(dato);
  };
  
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

 let estado = ["Verdadero","Falso"];


 rl.question("Escoja entre el 0 y 9: ", (respuesta1)=>{
    const datacion = parseInt(respuesta1,10);
    datacion <= 9 && datacion >= 0 ? imprimir(estado[0]) : imprimir(estado[1]);
    rl.close();
});

