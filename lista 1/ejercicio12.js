let nFilas = parseInt(prompt("Escribe el numero de filas: \n"));
let nColumnas = parseInt(prompt("Escribe el numero de columnas: \n"));

let nTot = nFilas * nColumnas;

let tabla = new Array(nFilas);

for(let i = 0; i < tabla.length; i++){
    tabla[i] = new Array(nColumnas);
}

for(let i = 0; i < tabla.length; i++){
    for(let j = 0; j < tabla[i].length; j++){
        tabla[i][j] = nTot;
        nTot--;
    }
}

console.log(tabla);