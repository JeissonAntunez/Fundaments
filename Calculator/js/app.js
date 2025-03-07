document.addEventListener("DOMContentLoaded", function () {
    let inputDato = document.getElementById("dato");
    let botones = document.querySelectorAll(".btn-condicion");

    botones.forEach(boton => {
        boton.addEventListener("click", function () {
            let valor = this.innerText.trim(); // Obtener texto del botón

            if (this.querySelector("img")) {
                borrarUltimo(); // Si el botón tiene una imagen, borra un carácter
            } else if (valor === "=") {
                calcularResultado();
            } else if (valor === "C") {
                borrarTodo();
            } else if (valor === "CE") {
                borrarUltimo();
            } else if (valor === "÷") {
                inputDato.value += "/";
            } else if (valor === "×") {
                inputDato.value += "*";
            } else {
                inputDato.value += valor;
            }
        });
    });

    // Función para calcular el resultado
    function calcularResultado() {
        try {
            // Osea que el eval toma el string como una operacion en si 
            inputDato.value = eval(inputDato.value);
        } catch {
            inputDato.value = "Error";
        }
    }

    // Función para borrar todo
    function borrarTodo() {
        inputDato.value = "";
    }

    // Función para borrar el último carácter
    function borrarUltimo() {
        inputDato.value = inputDato.value.slice(0, -1);
    }
});
