let frase = prompt("Escribe una frase\n");
let contador = 0;
let digito = 0;
for(let i = 0; i < frase.length; i++){
    digito = parseInt(frase.charAt(i));

    if(!isNaN(digito)){
        contador++;
    }
}
console.log(contador);