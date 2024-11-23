let playlist = [
    "Bohemian Rhapsody",
    "Imagine",
    "Hey Jude",
    "Like a Rolling Stone",
    "Smells Like Teen Spirit"
];

let playlistConIndice = [];

const agregar = playlist.map((playlist, indice) => playlistConIndice.push("Cancion => "+playlist+" Indice => "+indice));

console.log(playlistConIndice);