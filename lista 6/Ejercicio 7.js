class Ficha {
    nombre;
    sesiones;
    numeroSesiones;

    constructor(nombre){
        this.nombre = nombre;
        this.sesiones = [];
        this.numeroSesiones = 0;
    }

    anotar(kilometros){
        this.sesiones.push(kilometros);
        this.numeroSesiones++;
    }

    media(){
        if(this.numeroSesiones === 0){
            return 0;
        }
    
        let totalKilometros = this.sesiones.reduce((first, second) => first + second, 0);
        return totalKilometros / this.sesiones.length;
    }
    

}

let fichaPersona = new Ficha("Alejandro");

fichaPersona.anotar(10);
fichaPersona.anotar(8);

console.log(fichaPersona.media());