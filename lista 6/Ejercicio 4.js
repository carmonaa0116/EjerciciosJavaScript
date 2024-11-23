let personaJSON = '{"nombre": "Alejandro", "edad": "22", "profesion": "Albañil"}';

let persona = JSON.parse(personaJSON);

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);