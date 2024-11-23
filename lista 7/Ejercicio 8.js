function convertArrayToObject(array){

    let arrayDeObjetos = [];

    array.forEach(subArray => {
        const [nombre, habilidades, puntuaciones] = subArray;

        const objetoDelArray = {
            name: nombre,
            skills: habilidades,
            scores: puntuaciones
        };

        arrayDeObjetos.push(objetoDelArray);

    });

    return arrayDeObjetos;

}

const students = [
    ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
    ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];


console.log(convertArrayToObject(students));