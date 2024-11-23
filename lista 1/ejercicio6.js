function ejercicio6() {
    let n1, n2, n3;

    n1 = Math.floor(Math.random() * 99) + 1;

    do {
        n2 = Math.floor(Math.random() * 99) + 1;
    } while (n2 == n1);

    do {
        n3 = Math.floor(Math.random() * 99) + 1;
    } while (n3 == n2);

    agregarMensaje("Los números aleatorios generados no iguales son: " + n1 + " " + n2 + " " + n3);
}
