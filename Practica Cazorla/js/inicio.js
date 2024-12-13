import { inicio } from './objetos.js';

console.log("Se ha cargado el script inicio");
const contenido = document.querySelector(".contenido");
console.log(contenido);
const botonInicio = document.getElementById("botonInicio");
const botonEspecies = document.getElementById("botonEspecies");
const botonReservas = document.getElementById("botonReservas");
const botonGaleria = document.getElementById("botonGaleria");

botonInicio.addEventListener("click", () => {

    //Antes de nada, limpar el div
    contenido.innerHTML = '';


    //Controlo que no se pueda pulsar mas el boton inicio y el resto si
    botonInicio.style.pointerEvents = "none";
    botonEspecies.style.pointerEvents = "auto";
    botonReservas.style.pointerEvents = "auto";
    botonGaleria.style.pointerEvents = "auto";

    //Añado el titulo

    const tituloh2 = document.createElement("h2");
    tituloh2.textContent = inicio.titulo;
    contenido.appendChild(tituloh2);

    //Añado el contenido dividido en parrafos

    inicio.parrafos.forEach((parrafo) => {
        const parrafoDiv = document.createElement("p");
        parrafoDiv.className = "parrafo";
        parrafoDiv.textContent = parrafo;
        contenido.appendChild(parrafoDiv);  // Correcto: Añadir el párrafo al contenedor
    });
});

document.addEventListener("DOMContentLoaded", () => {
    //Antes de nada, limpar el div
    contenido.innerHTML = '';


    //Controlo que no se pueda pulsar mas el boton inicio y el resto si
    botonInicio.style.pointerEvents = "none";
    botonEspecies.style.pointerEvents = "auto";
    botonReservas.style.pointerEvents = "auto";
    botonGaleria.style.pointerEvents = "auto";

    //Añado el titulo

    const tituloh2 = document.createElement("h2");
    tituloh2.textContent = inicio.titulo;
    contenido.appendChild(tituloh2);

    //Añado el contenido dividido en parrafos

    inicio.parrafos.forEach((parrafo) => {
        const parrafoDiv = document.createElement("p");
        parrafoDiv.className = "parrafo";
        parrafoDiv.textContent = parrafo;
        contenido.appendChild(parrafoDiv);  // Correcto: Añadir el párrafo al contenedor
    });
});