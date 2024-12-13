import { reservas } from './objetos.js';
console.log("He cargado el script inicio");

// Selecciono el contenedor donde añadiré el contenido
const contenido = document.querySelector(".contenido");
console.log(contenido);

// Obtengo los botones que usaré para la navegación
const botonInicio = document.getElementById("botonInicio");
const botonEspecies = document.getElementById("botonEspecies");
const botonReservas = document.getElementById("botonReservas");
const botonGaleria = document.getElementById("botonGaleria");

// Añado un evento al botón de reservas
botonReservas.addEventListener("click", () => {
    // Primero, limpio el div de contenido
    contenido.innerHTML = '';

    // Desactivo el botón de reservas para evitar clics adicionales y habilito el resto
    botonInicio.style.pointerEvents = "auto";
    botonEspecies.style.pointerEvents = "auto";
    botonReservas.style.pointerEvents = "none";
    botonGaleria.style.pointerEvents = "auto";

    // Añado el título de la sección de reservas
    const tituloh2 = document.createElement("h2");
    tituloh2.textContent = reservas.titulo;
    contenido.appendChild(tituloh2);

    // Añado la descripción de las reservas
    const divDescripcion = document.createElement("div");
    divDescripcion.innerHTML = reservas.descripcion.join("<br>"); // Uno los elementos del array con saltos de línea
    contenido.appendChild(divDescripcion);

    // Generar tabla de "Visitas con guía"
    generarTablaVisitasGuia();

    // Generar tabla de "Aula educativa"
    generarTablaAulaEducativa();
});

function generarTablaVisitasGuia() {
    const tabla = document.createElement("table");
    contenido.appendChild(tabla);

    // Crear encabezado principal
    const thead = document.createElement("thead");
    tabla.appendChild(thead);

    const trPrincipal = document.createElement("tr");
    const thPrincipal = document.createElement("th");
    thPrincipal.colSpan = 4;
    thPrincipal.textContent = "Visitas con guía";
    trPrincipal.appendChild(thPrincipal);
    thead.appendChild(trPrincipal);

    // Crear fila de temporadas
    const trTemporadas = document.createElement("tr");
    trTemporadas.classList.add("header");
    const tdVacio = document.createElement("td");
    trTemporadas.appendChild(tdVacio);

    const tdVerano = document.createElement("td");
    tdVerano.colSpan = 2;
    tdVerano.textContent = reservas.horarios.visitasGuiadas.verano.titulo;
    trTemporadas.appendChild(tdVerano);

    const tdInvierno = document.createElement("td");
    tdInvierno.textContent = reservas.horarios.visitasGuiadas.invierno.titulo;
    trTemporadas.appendChild(tdInvierno);

    thead.appendChild(trTemporadas);

    // Crear cuerpo de la tabla
    const tbody = document.createElement("tbody");
    tabla.appendChild(tbody);

    // Fila de horarios
    const trHorarios = document.createElement("tr");
    trHorarios.classList.add("subheader");

    const tdHorarioTitulo = document.createElement("td");
    tdHorarioTitulo.textContent = "Horarios";
    trHorarios.appendChild(tdHorarioTitulo);

    const tdHorarioVerano = document.createElement("td");
    tdHorarioVerano.colSpan = 2;
    tdHorarioVerano.innerHTML = reservas.horarios.visitasGuiadas.verano.horarios.join("<br>");
    trHorarios.appendChild(tdHorarioVerano);

    const tdHorarioInvierno = document.createElement("td");
    tdHorarioInvierno.innerHTML = reservas.horarios.visitasGuiadas.invierno.horarios.join("<br>");
    trHorarios.appendChild(tdHorarioInvierno);

    tbody.appendChild(trHorarios);

    // Fila de tarifas
    const trTarifas = document.createElement("tr");
    trTarifas.classList.add("subheader");

    const tdTarifaTitulo = document.createElement("td");
    tdTarifaTitulo.textContent = "Tarifas";
    trTarifas.appendChild(tdTarifaTitulo);

    const tdTarifaVeranoInd = document.createElement("td");
    tdTarifaVeranoInd.innerHTML = `Individual<br>${reservas.horarios.visitasGuiadas.verano.tarifas.individual}`;
    trTarifas.appendChild(tdTarifaVeranoInd);

    const tdTarifaVeranoGrupo = document.createElement("td");
    tdTarifaVeranoGrupo.innerHTML = `Grupos<br>${reservas.horarios.visitasGuiadas.verano.tarifas.grupos}`;
    trTarifas.appendChild(tdTarifaVeranoGrupo);

    const tdTarifaInvierno = document.createElement("td");
    tdTarifaInvierno.innerHTML = `Individual: ${reservas.horarios.visitasGuiadas.invierno.tarifas.individual}<br>Grupos: ${reservas.horarios.visitasGuiadas.invierno.tarifas.grupos}`;
    trTarifas.appendChild(tdTarifaInvierno);

    tbody.appendChild(trTarifas);
}

function generarTablaAulaEducativa() {
    const tabla = document.createElement("table");
    contenido.appendChild(tabla);

    // Crear encabezado principal
    const thead = document.createElement("thead");
    tabla.appendChild(thead);

    const trPrincipal = document.createElement("tr");
    const thPrincipal = document.createElement("th");
    thPrincipal.colSpan = 3;
    thPrincipal.textContent = "Aula educativa (sólo grupos)";
    trPrincipal.appendChild(thPrincipal);
    thead.appendChild(trPrincipal);

    // Crear fila de temporadas
    const trTemporadas = document.createElement("tr");
    trTemporadas.classList.add("header");
    const tdVacio = document.createElement("td");
    trTemporadas.appendChild(tdVacio);

    const tdVerano = document.createElement("td");
    tdVerano.textContent = "Temporada de Verano";
    trTemporadas.appendChild(tdVerano);

    const tdInvierno = document.createElement("td");
    tdInvierno.textContent = "Temporada de Invierno";
    trTemporadas.appendChild(tdInvierno);

    thead.appendChild(trTemporadas);

    // Crear cuerpo de la tabla
    const tbody = document.createElement("tbody");
    tabla.appendChild(tbody);

    // Fila de horarios
    const trHorarios = document.createElement("tr");
    trHorarios.classList.add("subheader");

    const tdHorarioTitulo = document.createElement("td");
    tdHorarioTitulo.textContent = "Horarios";
    trHorarios.appendChild(tdHorarioTitulo);

    const tdHorarioVerano = document.createElement("td");
    tdHorarioVerano.innerHTML = reservas.horarios.aulaEducativa.verano.horarios.join("<br>");
    trHorarios.appendChild(tdHorarioVerano);

    const tdHorarioInvierno = document.createElement("td");
    tdHorarioInvierno.innerHTML = reservas.horarios.aulaEducativa.invierno.horarios.join("<br>");
    trHorarios.appendChild(tdHorarioInvierno);

    tbody.appendChild(trHorarios);

    // Fila de tarifas
    const trTarifas = document.createElement("tr");
    trTarifas.classList.add("subheader");

    const tdTarifaTitulo = document.createElement("td");
    tdTarifaTitulo.textContent = "Tarifas";
    trTarifas.appendChild(tdTarifaTitulo);

    const tdTarifaVeranoInvierno = document.createElement("td");
    tdTarifaVeranoInvierno.colSpan = 2;
    tdTarifaVeranoInvierno.textContent = reservas.horarios.aulaEducativa.verano.tarifa;
    trTarifas.appendChild(tdTarifaVeranoInvierno);

    tbody.appendChild(trTarifas);
}
