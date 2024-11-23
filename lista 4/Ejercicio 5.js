let resul = "";
function conversionBinario(n, resul){

    if(n===0){
        return resul;
    }

    if(n % 2 === 0){
        resul = resul + "0";
    } else {
        resul = resul + "1";
    };

    return conversionBinario(Math.floor(n/2), resul);

}
let n = 10;
console.log(conversionBinario(n,resul));