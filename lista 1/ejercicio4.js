function ejercicio4(numero1, numero2, numero3) {
    let media = (numero1 + numero2 + numero3) / 3;
    let mayor = Math.max(numero1, numero2, numero3);
    let menor = Math.min(numero1, numero2, numero3);

    agregarMensaje("La media de los tres números es: " + media);
    agregarMensaje("El número mayor es el " + mayor);
    agregarMensaje("El número menor es el " + menor);
}