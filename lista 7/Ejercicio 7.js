const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];

const [nombre, habilidades, puntuaciones] = student;

const [, ,jsScore,reactScore] = puntuaciones;

console.log(` Nombre: ${nombre},\n Habilidades: ${habilidades},\n Puntuacion JavaScript: ${jsScore},\n Puntuacion React: ${reactScore}`);
