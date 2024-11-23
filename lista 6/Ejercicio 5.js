class Piedra {
    masa;
    volumen;
    constructor(masa, volumen){
        this.masa = masa;
        this.volumen = volumen;
    }
    densidad(){
        return this.masa / this.volumen;
    }
}

let piedra = new Piedra(270,100);

console.log(piedra.densidad());