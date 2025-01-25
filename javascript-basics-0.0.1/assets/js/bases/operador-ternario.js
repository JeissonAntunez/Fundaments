

// Entra a un sitio web, para consultar si está abierto o cerrado
const dia = 5; // 0: Domingo, 1: Lunes, 2: Martes, 3: Miércoles, 4: Jueves, 5: Viernes, 6: Sábado
const horaActual = 10;



let horaApertura;
let mensaje; // Está abierto, Está cerrado, Hoy abrimos a las XX
// let horaAperturaFD = 9;
// let horaAperturaES = 11;
// let mensaje; // Está abierto, Está cerrado, Hoy abrimos a las XX

// let dias = dia === 0 || dia === 6 ? `Fin de semana \n  La apertura es a las ${horaAperturaFD} am` : `Día de semana \n  La apertura es a las ${horaAperturaES} am`;



// console.log(dias);

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

// console.log({horaApertura});


mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});