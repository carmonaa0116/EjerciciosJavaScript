function ejercicio7(entero) {
    let numeros = [];

    for (let i = entero - 1; i >= 0; i--) {
        numeros[i] = i + 1;
    }

    numeros.reverse();

    agregarMensaje("Números en orden descendente: " + numeros);
}