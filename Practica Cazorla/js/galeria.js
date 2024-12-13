import { galeria } from './objetos.js';

console.log("Se ha cargado el script galeria!");
const contenido = document.querySelector(".contenido");
console.log(contenido);
const botonInicio = document.getElementById("botonInicio");
const botonEspecies = document.getElementById("botonEspecies");
const botonReservas = document.getElementById("botonReservas");
const botonGaleria = document.getElementById("botonGaleria");

let imagenSeleccionada = 0;

botonGaleria.addEventListener("click", () => {
    // Antes de nada, limpiar el div
    contenido.innerHTML = '';

    // Controlo que no se pueda pulsar más el botón inicio y el resto sí
    botonInicio.style.pointerEvents = "auto";
    botonEspecies.style.pointerEvents = "auto";
    botonReservas.style.pointerEvents = "auto";
    botonGaleria.style.pointerEvents = "none";
    //Añado el titulo
    const textoh2 = document.createElement("h2");
    textoh2.textContent = galeria.titulo;
    contenido.appendChild(textoh2);

    //Añado el div de imagenes y le pongo estilo
    const divFotos = document.createElement("div");
    divFotos.style.width = "250px";
    divFotos.style.height = "250px"
    divFotos.style.border = "1px solid black";
    contenido.appendChild(divFotos);
    //Añado el div de los botones
    const divBotones = document.createElement("div");
    divBotones.style.width = "125px";
    divBotones.style.height = "auto";
    contenido.appendChild(divBotones);
    //Añado los botones al divBotones
    const boton1 = document.createElement("button");
    boton1.classList.add("atras");
    boton1.textContent = "<-";
    const boton2 = document.createElement("button");
    boton2.classList.add("adelante");
    boton2.textContent = "->";
    divBotones.appendChild(boton1);
    divBotones.appendChild(boton2);

    const foto = document.createElement("img");

    foto.style.width = "inherit";
    foto.style.height = "inherit";
    foto.src = galeria.imagenes[0];
    divFotos.appendChild(foto);


    boton1.addEventListener("click", () => {
        if (imagenSeleccionada > 0) {
            imagenSeleccionada--;
            foto.src = galeria.imagenes[imagenSeleccionada]; // Actualizar la imagen
        } else {
            console.log("No hay más imágenes hacia atrás.");
        }
    });

    boton2.addEventListener("click", () => {
        if (imagenSeleccionada < galeria.imagenes.length - 1) {
            imagenSeleccionada++;
            foto.src = galeria.imagenes[imagenSeleccionada]; // Actualizar la imagen
        } else {
            console.log("No hay más imágenes hacia adelante.");
        }
    });
    console.log(imagenSeleccionada);
});