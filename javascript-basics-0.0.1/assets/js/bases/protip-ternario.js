


const elMayor = (a, b) => (a > b) ? a : b;  

const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares'; 



console.log(elMayor(20, 15));
console.log(tieneMembresia(false));


const amigo = true;
const amigosArr = [ 
    'Peter', 
    'Tony', 
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(20, 15) 
    ];

console.log(amigosArr);

const nota = 85; // A+ A B+ B   
const grado = nota >= 95 ? 'A+' : 
              nota >= 90 ? 'A' : 
              nota >= 85 ? 'B+' : 
              nota >= 80 ? 'B' : 'F';


console.log({nota, grado});

//Hacer un switch case para el grado de la nota