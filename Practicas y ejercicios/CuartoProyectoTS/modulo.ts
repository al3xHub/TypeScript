module miModulo {

    export class Vehiculo {
        private marca: string;
        private modelo: string;

        constructor(marca: string, modelo: string) {
            this.marca = marca;
            this.modelo = modelo;
        }

        //getters
        get Marca() {
            return this.marca;
        }

        get Modelo() {
            return this.modelo;
        }

        //setters

        set Marca(marca: string) {
            this.marca = marca;

        }
        set Modelo(modelo: string) {
            this.modelo = modelo;

        }

        metodoDelVehiculo() {
            console.log("Método del vehiculo.");
        }
    }

    export class Coche extends Vehiculo {
        metodoDelCoche() {
            console.log("Método del coche.");
        }
    }

    export class TractorCortacesped extends Vehiculo {
        metodoDelTractorCortacesped() {
            console.log("Método del tractor cortacésped.");
        }
    }
}
let miCoche: miModulo.Vehiculo = new miModulo.Vehiculo("Tesla", "3");
miCoche.metodoDelVehiculo();