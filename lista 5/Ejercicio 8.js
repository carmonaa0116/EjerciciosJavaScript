let masNumeros = [];

for(let i = 0; i < 5; i++){
    masNumeros[i] = (Math.floor(Math.random()*10));
    console.log(masNumeros[i]);
}

let numeroPares = [];
let numeroImpares = [];

numeroPares.push(masNumeros.filter((masNumeros) => masNumeros % 2 == 0));
numeroImpares.push(masNumeros.filter((masNumeros) => masNumeros % 2 != 0));

console.log("Numeros pares => "+numeroPares);
console.log("Numeros impares => "+numeroImpares);