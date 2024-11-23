const numeros = [
    Math.floor(Math.random() * 100) - 50,
    Math.floor(Math.random() * 100) - 50,
    Math.floor(Math.random() * 100) - 50,
    Math.floor(Math.random() * 100) - 50,
    Math.floor(Math.random() * 100) - 50,
    Math.floor(Math.random() * 100) - 50,
    Math.floor(Math.random() * 100) - 50
];

console.log(numeros);

let todosSumados = 0;


let numerosPostivos = numeros.filter((numeros) => numeros >= 0);

let dobleNumeros = numerosPostivos.map(function(n){
    n = n*2;
    return n;
});

let final = dobleNumeros.reduce((first, second) => first + second);

console.log(numerosPostivos);
console.log(dobleNumeros);
console.log(final);