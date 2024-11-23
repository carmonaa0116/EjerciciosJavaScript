let producto = {
    precio: 200,
    descuento: 0.2
}

let productoJSON = JSON.stringify({
    precio: producto.precio,
    descuento: producto.descuento
});

console.log(productoJSON);