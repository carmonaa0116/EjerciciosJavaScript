const personas = ["Juan",  25, "María", 30, "Carlos", 22, "Laura", 28, "Pedro", 35, "Ana",21,"Luis", 40];

let resul = personas.filter((personas) => !(typeof personas === "string")).reduce((first, second) => first + second);
console.log("Los años sumados entre si dan: "+resul);