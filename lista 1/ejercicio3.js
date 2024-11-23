function ejercicio3(nota) {
    if (nota >= 0 && nota < 3) {
        agregarMensaje("Tu nota es muy deficiente");
    } else if (nota >= 3 && nota < 5) {
        agregarMensaje("Tu nota es insuficiente");
    } else if (nota >= 5 && nota < 6) {
        agregarMensaje("Tu nota es suficiente");
    } else if (nota >= 6 && nota < 7) {
        agregarMensaje("Tu nota está bien");
    } else if (nota >= 7 && nota < 9) {
        agregarMensaje("Tu nota está notable");
    } else if (nota >= 9 && nota < 10) {
        agregarMensaje("Tu nota es sobresaliente");
    }
}