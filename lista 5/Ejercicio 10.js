let numeros = [];

for(let i = 0; i < 5; i++){
    numeros[i] = (Math.floor(Math.random()*10));
    console.log(numeros[i]);
}

let numerosMasDiez = [];

const sumar = numeros.map((numeros) => numerosMasDiez.push(numeros + 10))

console.log(numerosMasDiez);