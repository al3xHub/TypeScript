class Coche {
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
    constructor(kilometraje?: number, propietario?: string, color?: string) {
        this._kilometraje = kilometraje || 0;
        this._propietario = propietario || "";
        this._color = color || "";
    }

    // Los métodos
    avanzar(numeroDeMetros: number) {
        this._kilometraje += numeroDeMetros;
    }
    retroceder(numeroDeMetros: number) {
        this._kilometraje += numeroDeMetros; //Aunque el coche retroceda, aumenta su kilometraje
    }
}

// Declaración de un nuevo coche
let miCoche = new Coche();

let miCoche2 = new Coche(180000, "CapitanFlam", "Rojo");
console.log("kilometraje al principio: " + miCoche2.kilometraje);
console.log("Avanzo ...");
miCoche2.avanzar(100);
console.log("Retrocedo...");
miCoche2.retroceder (50);
console.log("kilometraje al final: " + miCoche2.kilometraje);
console.log("Si cuando yo avanzo, tu retrocedes, ...");


let miCoche3 = new Coche(0, "", "rojo")
// Uso de los setters
miCoche.propietario = "Actarus";
miCoche.kilometraje = 120000;
miCoche.color = "gris";

// Mostrar el coche gracias a los getters
// console.log("Mi coche : " + miCoche.propietario + " - " + miCoche.kilometraje + " km - " + miCoche.color);
// console.log("Mi coche : " + miCoche2.propietario + " - " + miCoche2.kilometraje + " km - " + miCoche2.color);
// console.log("Mi coche : " + miCoche3.propietario + " - " + miCoche3.kilometraje + " km - " + miCoche3.color);

