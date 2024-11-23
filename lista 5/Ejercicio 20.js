let mix = [42, 3.14159, "Hola", true, "JavaScript", false];

let soloString = [];

soloString = mix.filter((mix) => typeof mix === "string");
console.log(soloString);