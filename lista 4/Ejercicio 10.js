function aritmetica(){
    let n1 = parseInt(prompt("Escribe el primer numero\n"));
    let n2 = parseInt(prompt("Escribe el segundo numero\n"));
    let n3 = parseInt(prompt("Escribe el tercer numero\n"));

    const arr = [
        n1,
        n2,
        n3
    ];

    return "Mayor: " +Math.max(...arr).toString() + "\nMenor: "+Math.min(...arr)+"\nMedia: "+ (arr[0] + arr[1] + arr[2])/arr.length;

}

console.log(aritmetica());