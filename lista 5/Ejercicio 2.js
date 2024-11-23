let libros = [
    "Cien años de soledad",
    "Don Quijote de la Mancha",
    "Orgullo y prejuicio",
    "El gran Gatsby",
    "1984"
];
let contador = 0;
let palabra = "";
do{
    palabra = libros[contador];
    contador++;
}while(palabra !== undefined);

console.log(contador-1);