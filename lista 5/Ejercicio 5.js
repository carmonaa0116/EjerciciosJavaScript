let notasDeTPs = [];

for(let i = 0; i < 5; i++){
    notasDeTPs[i] = (Math.floor(Math.random()*10));
}

let acumulador = 0;
const f = function(nota) {
    acumulador += nota;
}

notasDeTPs.forEach(f);

let promedio = acumulador / notasDeTPs.length;
console.log("Con forEach: "+promedio);

acumulador = 0;

acumulador = notasDeTPs.reduce((first, second) => {
    return first + second;

});
acumulador = acumulador / notasDeTPs.length;
console.log("Con reduce: "+ acumulador);