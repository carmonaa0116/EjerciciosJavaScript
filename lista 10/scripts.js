function incrementar() {
    const contadorDivVerde = document.getElementById("contadorDivVerde").innerText;
    let numeroContador = parseInt(contadorDivVerde) || 0;
    numeroContador++;
    document.getElementById("contadorDivVerde").innerText = numeroContador.toString();
    console.log(numeroContador);
}

function disminuir() {
    const contadorDivVerde = document.getElementById("contadorDivVerde").innerText;
    let numeroContador = parseInt(contadorDivVerde) || 0;
    if (numeroContador > 0) {
        numeroContador--;
    }
    document.getElementById("contadorDivVerde").innerText = numeroContador.toString();
    console.log(numeroContador);
}

function borrar() {
    document.getElementById("contadorDivVerde").innerText = "0";
    console.log("Contador reiniciado");
}

function incrementarContadorClicks() {
    const contadorClicks = document.getElementById("contadorClicks").innerText;
    let nuevoContador = parseInt(contadorClicks) || 0;
    nuevoContador++;
    document.getElementById("contadorClicks").innerText = nuevoContador.toString();
    console.log("Clicks totales: " + nuevoContador);
}

document.getElementById("borrar").addEventListener("click", borrar);
document.getElementById("incrementar").addEventListener("click", incrementar);
document.getElementById("disminuir").addEventListener("click", disminuir);

document.getElementById("borrar").addEventListener("click", incrementarContadorClicks);
document.getElementById("incrementar").addEventListener("click", incrementarContadorClicks);
document.getElementById("disminuir").addEventListener("click", incrementarContadorClicks);