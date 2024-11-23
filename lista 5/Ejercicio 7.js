let masNumeros = [];

for(let i = 0; i < 5; i++){
    masNumeros[i] = (Math.floor(Math.random()*10));
    console.log(masNumeros[i]);
}

let numeroPares = [];
let numeroImpares = [];

const f = function(n){
    if(n % 2 == 0){
        numeroPares.push(n);
    } else {
        numeroImpares.push(n)
    }
}

masNumeros.forEach(f);

console.log("Numeros pares => "+numeroPares);
console.log("Numeros impares => "+numeroImpares);