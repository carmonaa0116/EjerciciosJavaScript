const frases = [
    "Sigue tus sueños.",
    "El tiempo es oro.",
    "Nunca te rindas.",
    "La vida es corta.",
    "Cree en ti mismo."
];

let frasesLi = [];

const encerrar = frases.map((frases) => frasesLi.push("<li>"+frases+"</li>"));
console.log("<ul>"+frasesLi+"</ul>");