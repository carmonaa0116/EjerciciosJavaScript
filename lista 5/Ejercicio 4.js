let number = [];

for(let i = 0; i < 5; i++){
    number[i] = Math.floor(Math.random()*10);
    console.log(number[i]);
}
let numero = 0;
const f = function(n){
    numero += n;
}

number.forEach(f);

console.log("Por for each: "+numero);

numero = 0;


numero = number.reduce((first, second) => {
    return first + second;
    }); 

console.log("Por reduce: "+numero);