class Cuenta {
    nombreTitular;
    saldo;
    constructor(nombreTitular, saldo){
        this.nombreTitular = nombreTitular;
        this.saldo = saldo;
    }
    ingresar(cantidad){


        this.saldo = this.saldo + cantidad;
    }
    retirar(cantidad){
        if((this.saldo - cantidad) > 0){
            this.saldo = this.saldo - cantidad;
        } else{
            console.log("No puedes dejar la Cuenta en negativo");
        }
        
    }
}

let cuentaAlejandro = new Cuenta("Alejandro", 0);

console.log("Saldo antes de ingresar: "+cuentaAlejandro.saldo);
cuentaAlejandro.ingresar(1000);
console.log("Saldo despues de ingresar: "+cuentaAlejandro.saldo);
cuentaAlejandro.retirar(100);
console.log("Saldo despues de retirar: "+ cuentaAlejandro.saldo);
cuentaAlejandro.retirar(2000);