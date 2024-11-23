let numero = parseInt(prompt("Escribe un numero: \n"));

const mostrarTablaMultiplicar = (function(numero){
    for(let i = 0; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
})(numero);