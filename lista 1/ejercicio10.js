let seguir = false;

let arr1 = [];
console.log("Escribe los elementos que quieras para llenar el array. Escribe SALIR para terminar de rellenarlo");
do {

    let elemento = prompt("Escribe un elemento (" + (arr1.length + 1) + ")");

    if (elemento === "SALIR") {
        seguir = true;
    } else {
        arr1.push(elemento);
    }



} while (seguir === false);


seguir = false;
let arr2 = [];
console.log("Array 2:");
do {

    let elemento = prompt("Escribe un elemento (" + (arr2.length + 1) + ")");

    if (elemento === "SALIR") {
        seguir = true;
    } else {
        arr2.push(elemento);
    }



} while (seguir === false);


let arrayGrande = Math.max(arr1.length, arr2.length);
let arrFinal = [];
for (let i = 0; i < arrayGrande; i++) {
    if (i < arr1.length) {
        arrFinal.push(arr1[i]);
    }
    if (i < arr2.length) {
        arrFinal.push(arr2[i]);
    }
}

console.log(arrFinal);