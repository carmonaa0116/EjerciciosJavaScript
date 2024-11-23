function fibbonacci(n){
    if(n === 0){
        return 0;

    } else if(n === 1){
        return 1;
    } else {
        return fibbonacci(n - 1) + fibbonacci(n-2);
    }
}

for(let i = 1; i <= 10; i++){
    console.log(fibbonacci(i));
}

