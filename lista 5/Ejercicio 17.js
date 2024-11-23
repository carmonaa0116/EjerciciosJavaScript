const costos = [12.5, 56, 98, 45.75];

const productos = [
    "Coca-Cola",
    "Nutella",
    "Colgate",
    "Nike Air Max",
    "iPhone 14"
];

const agregarIVA = function (costo) {
  return costo * 1.21;
}

const sumarGanancia = function (costo) {
  return costo * 1.5;
}

let costosYproductos = [];

let constoConGanacia = 0;
let costoConIVA = 0;
for(let i = 0; i < costos.length; i++){

    costoConGanancia = sumarGanancia(costos[i]);

    costoConIVA = agregarIVA(costos[i]);

    costosYproductos.push(`Producto => ${productos[i]}; Coste => ${costoConIVA}`);

    costoConIVA = 0;
    constoConGanacia = 0;
}

console.log(costosYproductos);
