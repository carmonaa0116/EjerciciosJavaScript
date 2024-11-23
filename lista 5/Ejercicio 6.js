let notas = [];

for(let i = 0; i < 5; i++){
    notas[i] = (Math.floor(Math.random()*10));
    console.log(notas[i]);
}
/*
every sirve para si se cumple la condicion de todos los elementos del array, devuelva true
*/
let todasBien = notas.every((notas) => notas >= 5);
console.log(todasBien);