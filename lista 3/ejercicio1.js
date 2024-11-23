let seguir = false;

let n = 0;
let array = [];
let i = 0;
while(seguir == false){
    n = prompt("Escribe un número \n");
    if(n == '.'){
        seguir = true;
    } else {
        array[i] = n;
        i++;
    }
}

console.log(Math.max(...array));