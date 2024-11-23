function ejercicio2() {
    let sumaPares = 0;
    let sumaImpares = 0;

    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            sumaPares += i;
        } else {
            sumaImpares += i;
        }
    }

    agregarMensaje("La suma de los números pares es: " + sumaPares);
    agregarMensaje("La suma de los números impares es: " + sumaImpares);
}
