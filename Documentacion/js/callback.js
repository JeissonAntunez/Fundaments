function saludar(nombre) {
    alert("Hola " + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    var dato = prompt("Por favor ingresa tu nombre.");
    callback(dato);
  }
  
  procesarEntradaUsuario(saludar);