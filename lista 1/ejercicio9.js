let array = [];
//Pide los elementos de un vector
let nElementos = parseInt(prompt('Escribe el numero de elementos del array\n'));

for(let i = 0; i < nElementos; i++){
    let elemento = prompt("Introduce el elemento "+ (i + 1) +":"); 
    array.push(elemento);
}

console.log("El array actual es: ["+array+"]");

//pide la posicion y un valor
let seguir = false;

do{
    let pos = prompt("Escribe una posicion (0-"+nElementos+"): ");

    let valor = prompt("Escribe un valor: ");

    if(pos >= 0 && pos <= nElementos - 1){
        array.splice(pos, 1, valor);
        seguir = true;
    } else{
        console.log("Escribe una posicion valida (0-"+nElementos+")");
    }


}while(seguir === false);

console.log("El array resultante es: ["+array+"]");



