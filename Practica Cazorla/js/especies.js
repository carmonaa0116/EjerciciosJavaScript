import { especies } from './objetos.js';

console.log("Se ha cargado el script especies!");
const contenido = document.querySelector(".contenido");
console.log(contenido);
const botonInicio = document.getElementById("botonInicio");
const botonEspecies = document.getElementById("botonEspecies");
const botonReservas = document.getElementById("botonReservas");
const botonGaleria = document.getElementById("botonGaleria");

botonEspecies.addEventListener("click", () => {
    // Antes de nada, limpiar el div
    contenido.innerHTML = '';

    // Controlo que no se pueda pulsar más el botón inicio y el resto sí
    botonInicio.style.pointerEvents = "auto";
    botonEspecies.style.pointerEvents = "auto";
    botonReservas.style.pointerEvents = "auto";
    botonGaleria.style.pointerEvents = "auto";

    // Añado el título
    const tituloh2 = document.createElement("h2");
    tituloh2.textContent = especies.titulo;
    contenido.appendChild(tituloh2);

    // Creo un div para meter los animales y la imagen del animal
    const contenedorAnimalesImagen = document.createElement("div");
    contenedorAnimalesImagen.classList.add("contenedorAnimalesImagen");
    contenedorAnimalesImagen.style.display = "flex";
    contenedorAnimalesImagen.style.gap = "20px"; // Espacio entre los divs
    contenedorAnimalesImagen.style.flexDirection = "row";

    // Añado el div para agregar los animales
    const divAnimales = document.createElement("div");
    divAnimales.classList.add("divAnimales");
    divAnimales.style.display = "flex";
    divAnimales.style.flexDirection = "column"; // Los animales se colocan en columna

    // Añado el div para poner las imágenes
    const divImagenes = document.createElement("div");
    divImagenes.classList.add("divImagenes");
    divImagenes.style.width = "200px";  // Un poco más grande
    divImagenes.style.height = "200px"; // Para que sea cuadrado

    divImagenes.style.borderRadius = "8px";  // Bordes redondeados
    divImagenes.style.overflow = "";  // Para asegurar que la imagen no se salga del contenedor
    // Sombra suave para darle profundidad
    divImagenes.style.transition = "opacity 0.3s ease";  // Transición suave de opacidad

    divImagenes.style.display = "flex";
    divImagenes.style.justifyContent = "center";
    divImagenes.style.alignItems = "center";
    divImagenes.style.flexDirection = "column";

    // Limpiar cualquier contenido dentro de divImagenes al principio
    divImagenes.innerHTML = ''; // Aseguramos que esté vacío por defecto

    // Agrego ambos divs al contenedor general
    contenedorAnimalesImagen.appendChild(divAnimales);
    contenedorAnimalesImagen.appendChild(divImagenes);

    // Finalmente, agrego el contenedor al contenido
    contenido.appendChild(contenedorAnimalesImagen);

    // Accedo a los animales desde especies.animales
    especies.animales.forEach((animal) => {
        // Creo el div para el animal
        const animalDiv = document.createElement("div");
        animalDiv.classList.add("animal");
        animalDiv.style.display = "flex"; // Los contenidos se alinean en fila
        animalDiv.style.justifyContent = "space-between"; // Distribuyo el espacio entre elementos

        // Recojo un div con el nombre del animal
        const divNombreAnimal = document.createElement("h3");
        divNombreAnimal.textContent = animal.nombre;

        // Recojo un div con la descripción del animal
        const divDescripcionAnimal = document.createElement("p");
        divDescripcionAnimal.textContent = animal.descripcion;

        // Los añado al div del animal
        const divTexto = document.createElement("div");
        divTexto.classList.add("divTexto");
        divTexto.appendChild(divNombreAnimal);
        divTexto.appendChild(divDescripcionAnimal);
        animalDiv.appendChild(divTexto);

        // Eventos para mostrar la imagen del animal
        animalDiv.addEventListener("mouseover", () => {
            divImagenes.style.opacity = "1"; // Muestra la imagen al pasar el ratón
            const imagenAnimal = document.createElement("img");
            imagenAnimal.style.width = "200px";
            imagenAnimal.style.height = "200px";
            imagenAnimal.src = animal.imagen;
            imagenAnimal.alt = animal.nombre;

            divImagenes.innerHTML = ''; // Limpiar cualquier imagen anterior
            divImagenes.appendChild(imagenAnimal);
        });

        animalDiv.addEventListener("mouseout", () => {
            // Oculta la imagen al quitar el ratón
            divImagenes.innerHTML = ''; // Limpiar el contenedor al salir
        });

        // Agrego el animal al divAnimales
        divAnimales.appendChild(animalDiv);
    });
});
