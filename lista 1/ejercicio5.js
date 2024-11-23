function ejercicio5(numero) {
    let numeroInverso = numero.toString().split("").reverse().join("");

    if (numeroInverso == numero) {
        agregarMensaje("El número (" + numero + ") es capicúa");
    } else {
        agregarMensaje("El número (" + numero + ") no es capicúa");
    }
}