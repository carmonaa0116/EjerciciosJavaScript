const countries = [
    {
        name: "Finland",
        capital: "Helsinki",
        population: 5527573,
        languages: ["Finnish", "Swedish"]
    },
    {
        name: "Estonia",
        capital: "Tallinn",
        population: 1328976,
        languages: ["Estonian"]
    },
    {
        name: "Sweden",
        capital: "Stockholm",
        population: 10353442,
        languages: ["Swedish"]
    },
    {
        name: "Denmark",
        capital: "Copenhagen",
        population: 5831404,
        languages: ["Danish"]
    },
    {
        name: "Norway",
        capital: "Oslo",
        population: 5421241,
        languages: ["Norwegian"]
    }
];

for(const { name, capital, population, languages } of countries){
    console.log(`Nombre: ${name}, Capital: ${capital}, Poblacion: ${population}, Idiomas: ${languages}\n`);
}