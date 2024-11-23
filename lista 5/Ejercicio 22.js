let number = [];

for(let i = 0; i < 5; i++){
    number[i] = Math.floor(Math.random()*10);
    console.log(number[i]);
}

console.log(number.reduce((first, second) => first+second));