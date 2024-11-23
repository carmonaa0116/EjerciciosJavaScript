let arrayDias = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"];
const miSet = new Set();
for(let i = 0; i < arrayDias.length; i++){
    miSet.add(arrayDias[i]);
}

for(let i of miSet){
    console.log(i);
}