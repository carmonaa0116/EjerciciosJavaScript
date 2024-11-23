let number = [];

for(let i = 0; i < 5; i++){
    number[i] = Math.floor(Math.random()*10);
    console.log(number[i]);
}

let numerosPares = [];
let numerosImpares = [];

numerosPares.push(number.filter((number) => number % 2 === 0));
numerosImpares.push(number.filter((number) => number % 2 !== 0));

console.log(`Pares => ${numerosPares}`);
console.log(`Impares => ${numerosImpares}`);