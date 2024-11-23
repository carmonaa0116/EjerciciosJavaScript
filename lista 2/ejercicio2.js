let palabra1 = prompt("Escribe la primera palabra: \n");
let palabra2 = prompt("Escribe la segunda palabra: \n");

let palabraGrande = "";
let contador = 0;
if (palabra1.length == palabra2.length) {

    for (let i = 0; i < palabra1.length(); i++) {
        if(palabra1.charAt(i) != palabra2.charAt(i)){
            contador++;
        }
    }
}

console.log("Tienen " + contador + " letras distintas");