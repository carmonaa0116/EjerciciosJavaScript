let frase1ConEspacios = prompt("Escribe la primera frase: \n").replace(" ","");
let frase2ConEspacios = prompt("Escribe la segunda frase: \n");

let frase1 = frase1ConEspacios.replace(" ","");
let frase2 = frase2ConEspacios.replace(" ","");

let comunes = [];

for (let i = 0; i < frase1.length; i++) {
    let caracter = frase1[i]; 

    if (frase2.includes(caracter) && !comunes.includes(caracter)) {
        comunes.push(caracter);
    }
}

comunes.sort();
console.log("Los caracteres comunes son ->"+comunes.join(''));