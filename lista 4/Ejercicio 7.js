function parOimpar(num){
    if(isNaN(num)){
       console.log("Debes de escribir un numero"); 
    } else {
        if(num % 2 === 0){
            console.log(`El numero: ${num} es par`);
        } else {
            console.log(`El numero: ${num} es impar`);
        }
    }
}

parOimpar(12);