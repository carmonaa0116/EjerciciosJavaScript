const frases = [
    "Sigue tus sueños.",
    "El tiempo es oro.",
    "Nunca te rindas.",
    "La vida es corta.",
    "Cree en ti mismo."
];

let frasesLength = [];

const contar = frases.map((frases) => frasesLength.push(frases.length));
console.log("Frases originales => "+frases);
console.log("Longitud de las frases => "+frasesLength);