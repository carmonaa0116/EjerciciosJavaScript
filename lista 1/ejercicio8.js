function ejercicio8() {
    let cadenas = []; 
    let input; 

    while (true) {
        if (pausa) { 
            break; 
        }
        
        input = prompt("Introduce una cadena de texto (o pulsa 'cancelar' para salir):");

        if (input === null) {
            break; 
        }

        cadenas.push(input); 
    }

    let resultado = cadenas.join('-'); 
    agregarMensaje("Cadenas concatenadas: " + resultado); 
}

function pausarEjercicio() {
    pausa = true;
    agregarMensaje("La entrada de cadenas ha sido pausada.");
}
