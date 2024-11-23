let producto = {
    precio: 200,
    descuento: 0.2
}

function neto(objeto) {
    return objeto.precio * (1 - objeto.descuento);
}

console.log(neto(producto));
