class Persona {
    constructor(nombre, edad, ciudad) {
        // Si no se proporciona edad, se usa nombre como valor predeterminado
        this.nombre = nombre || "Alejandro";
        this.edad = edad || 16;  // Si edad es falsy, usa nombre en su lugar
        this.ciudad = ciudad || "Daimiel"
    }
}

let persona = new Persona("Alejandro");

let personaVacio = new Persona();

console.log(personaVacio.nombre);
console.log(personaVacio.edad);
console.log(personaVacio.ciudad);