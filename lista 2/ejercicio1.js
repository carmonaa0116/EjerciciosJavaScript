let cadenaOriginal = prompt("Escribe una cadena: \n");

let cadenaFinal = "";

for(let i = 0; i < cadenaOriginal.length; i++){
    if(cadenaOriginal.charAt(i) === cadenaOriginal.charAt(i).toUpperCase() && cadenaOriginal.charAt(i) != " "){
        cadenaFinal = cadenaFinal + cadenaOriginal.charAt(i).toLowerCase();
    } else if(cadenaOriginal.charAt(i) === cadenaOriginal.charAt(i).toLowerCase() && cadenaOriginal.charAt(i) != " "){
        cadenaFinal = cadenaFinal + cadenaOriginal.charAt(i).toUpperCase();
    } 
    if(cadenaOriginal.charAt(i) === "a" || cadenaOriginal.charAt(i) === "A"){
        cadenaFinal = cadenaFinal + "1";
    } else if(cadenaOriginal.charAt(i) === "e" || cadenaOriginal.charAt(i) === "E"){
        cadenaFinal = cadenaFinal + "2";
    } else if(cadenaOriginal.charAt(i) === "i" || cadenaOriginal.charAt(i) === "I"){
        cadenaFinal = cadenaFinal + "3";
    } else if(cadenaOriginal.charAt(i) === "o" || cadenaOriginal.charAt(i) === "O"){
        cadenaFinal = cadenaFinal + "4";
    } else if(cadenaOriginal.charAt(i) === "u" || cadenaOriginal.charAt(i) === "U"){
        cadenaFinal = cadenaFinal + "5";
    }
}

console.log("Cadena original: "+cadenaOriginal);
console.log("Cadena modificada: "+cadenaFinal);