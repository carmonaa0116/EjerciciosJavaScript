const cancionesDisponibles = [
    "Blinding Lights - The Weeknd",
    "Shape of You - Ed Sheeran",
    "Levitating - Dua Lipa",
    "Good 4 U - Olivia Rodrigo",
    "Watermelon Sugar - Harry Styles",
    "Save Your Tears - The Weeknd",
    "Peaches - Justin Bieber",
    "Kiss Me More - Doja Cat",
    "Stay - The Kid LAROI & Justin Bieber",
    "Montero (Call Me By Your Name) - Lil Nas X"
];

const playlistEscuchada = [
    "Blinding Lights - The Weeknd",
    "Shape of You - Ed Sheeran",
    "Watermelon Sugar - Harry Styles"
];

let playlistSinEscuchar = [];

//Se crea la variable cancion para iterar
playlistSinEscuchar = cancionesDisponibles.filter(
    (cancion) => !playlistEscuchada.includes(cancion)
);

console.log(playlistSinEscuchar);