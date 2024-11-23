function sumaYproducto(){
    let suma = 0;
    let producto = 1;

    for(let i = 1; i <= 20; i++){
        suma += i;
        producto *= i; 
    }

    let resul = "La suma de los primeros 20 numeros es: "+suma+"\nEl prodcuto de los primeros 20 numeros es: "+producto;

    return resul;
}

console.log(sumaYproducto());