
function saludar(nombre) {
    console.log(arguments);
    console.log('Hola Mundo' + nombre);
}

saludar('Fernando', 40, true, 'Costa Rica');



const saludar2 = (usuario)=>{
    console.log('Hola ' + usuario   );
}


saludar2('Fernando');
saludar2('Melissa');

const getAletorio2 = ()=> {
    return Math.floor(Math.random() * 10);  
}

console.log(getAletorio2());