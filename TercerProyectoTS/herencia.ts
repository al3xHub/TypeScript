// Definición de la clase Vehículo
class Vehiculo {
    // Atributos
    private _kilometraje: number;
    private _propietario: string;
    private _color: string;

    // Getters
    get kilometraje() {
        return this._kilometraje;
    }
    get propietario() {
        return this._propietario;
    }
    get color() {
        return this._color;
    }
    // Setters
    set kilometraje(km: number) {
        this._kilometraje = km;
    }
    set propietario(nombre: string) {
        this._propietario = nombre;
    }
    set color(color: string) {
        this._color = color;
    }

    // El constructor
    constructor(kilometraje: number, propietario: string, color: string) {
        this._kilometraje = kilometraje;
        this._propietario = propietario;
        this._color = color;
    }

    // Los métodos
    avanzar(numeroDeMetros: number) {
        this._kilometraje += numeroDeMetros;
    }
    retroceder(numeroDeMetros: number) {
        this._kilometraje += numeroDeMetros;
    }
}

// Definición de la clase CocheHeredado
class CocheHeredado extends Vehiculo {
    constructor(kilometraje: number, propietario: string, color: string) {
        super(kilometraje, propietario, color);
    }

}

class TractorCortacesped extends Vehiculo {

    constructor(kilometraje: number, propietario: string, color: string) {
        super(kilometraje, propietario, color);
    }

    bajar(numDeCm: number) {
        console.log("La hélice baja " + numDeCm + " centímetros");
    }
    subir(numDeCm: number) {
        console.log("La hélice sube " + numDeCm + " centímetros ");
    }

}

let tesla = new CocheHeredado(666, "García Julián", "Azul Marino");
let tt = new TractorCortacesped(12, " García Julián ", "Verde");
console.log("Kilometraje : " + tt.kilometraje);
tt.bajar(10);
tt.avanzar(0.1)
tt.subir(10);
tt.retroceder(0.1);
console.log("Kilometraje: " + tt.kilometraje);