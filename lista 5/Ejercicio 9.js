let numeros = [];

for(let i = 0; i < 5; i++){
    numeros[i] = (Math.floor(Math.random()*10));
    console.log(numeros[i]);
}

let numerosMultiplicados = [];

const f = function(n) {
    numerosMultiplicados.push(n*2);
}

numeros.forEach(f);
console.log(numerosMultiplicados);