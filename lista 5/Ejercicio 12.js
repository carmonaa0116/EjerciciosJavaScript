const frases = [
    "Sigue tus sueños.",
    "El tiempo es oro.",
    "Nunca te rindas.",
    "La vida es corta.",
    "Cree en ti mismo."
];

let frasesExclamacion = [];

const exclamar = frases.map((frases) => frasesExclamacion.push("¡"+frases+"!"));
console.log(frasesExclamacion);