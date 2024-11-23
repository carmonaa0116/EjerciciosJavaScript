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

for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j <arr1.length; j++){
        if((i != j) && arr1[i] === arr1[j]){
            arr1.splice(i, 1);
            arr1.splice(j,1);
            i--;
            
        }
    }
}

console.log(arr1);