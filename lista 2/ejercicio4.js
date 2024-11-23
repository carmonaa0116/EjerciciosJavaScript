const miset = new Set();

let arr1 = [12,12,12,14];
let arr2 = [11,11,13,15];
let arr3 = ["i","j","k","l"];

miset.add(arr1);
miset.add(arr2);
miset.add(arr3);

console.log(miset.size);

let contador = 0;
for(let i of miset){
    contador++;
}

console.log(contador);