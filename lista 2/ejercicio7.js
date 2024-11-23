// Crear el mapa usando un objeto como alternativa a un mapa
var mapa = {
    clave1: "manzana",
    clave2: "pera",
    clave3: "naranja",
    clave4: "plátano",
    clave5: "cereza"
};

var claves = Object.keys(mapa);

claves.sort(function(a, b) {
    if (mapa[a] < mapa[b]) return -1;
    if (mapa[a] > mapa[b]) return 1;
    return 0;
});

console.log("Mapa ordenado por valores:");
for (var i = 0; i < claves.length; i++) {
    console.log(claves[i] + ": " + mapa[claves[i]]);
}
