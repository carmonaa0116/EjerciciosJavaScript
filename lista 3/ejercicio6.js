const cadena = prompt("Escribe una cadena\n");
const letra = prompt("Escribe una letra que quieras buscar\n");

let contador = 0;
for(let i = 0; i < cadena.length; i++){
    if(cadena.charAt(i) === letra){
        contador++;
    }
}
console.log("Tu letra aparece "+contador+" veces");