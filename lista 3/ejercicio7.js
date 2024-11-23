let codigoProducto = prompt("Escribe tu código de producto (CC-OO-AA)\n");

if (codigoProducto.length != 8) {
    let tipoCliente = codigoProducto.substring(0, 2);
    let organizacion = codigoProducto.substring(3, 5);
    let antiguedad = codigoProducto.substring(6, 8);

    let seguir = 0;

    let codificado = "";

    switch (tipoCliente) {
        case "CP":
            codificado += "cliente particular, ";
            seguir++;
            break;
        case "CE":
            codificado += "empresa, ";
            seguir++;
            break;
        default:
            console.log("ERROR: LOS CARACTERES 1 Y 2 DEBEN DE SER 'CP' O 'CE'");
    }

    if (!isNaN(parseInt(organizacion))) {
        switch (parseInt(organizacion)) {
            case 10:
                codificado += "Local, ";
                seguir++;
                break;
            case 11:
                codificado += "Autonomico, ";
                seguir++;
                break;
            case 22:
                codificado += "Nacional, ";
                seguir++;
                break;
            case 20:
                codificado += "Internacional, ";
                seguir++;
                break;
            default:
                console.log("ERROR: LOS CARACTERES 3 Y 4 DEBEN DE SER '10', '11', '22' O '20'");

        }
    } else {
        console.log("ERROR: LOS CARACTERES 3 Y 4 DEBEN DE SER NUMÉRICOS");
    }



    if (!isNaN(parseInt(antiguedad))) {
        codificado += antiguedad;
        seguir++;
    } else {
        console.log("ERROR: LOS CARACTERES 5 Y 6 DEBEN DE SER NUMÉRICOS");
    }

    if (seguir === 3) {
        console.log(codificado);
    } else {
        console.log("No se ha podido imprimir ya que tu codigo no cumple con los requisitos");
    }
    //CP-10-12
} else{
    console.log("ERROR: EL CODIGO DEBE DE TENER 8 CARACTERES CON LA SIGUIENTE ESTRUCTURA (CC-OO-AA)");
}