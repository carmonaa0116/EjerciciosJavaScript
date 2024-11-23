let numeros = [];

for(let i = 0; i < 5; i++){
    numeros[i] = (Math.floor(Math.random()*10));
    console.log(numeros[i]);
}

let numerosEntreDos = [];

const sumar = numeros.map((numeros) => numerosEntreDos.push(numeros/2))

console.log(numerosEntreDos);