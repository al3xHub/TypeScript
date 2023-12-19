var Coche = /** @class */ (function () {
    // El constructor
    function Coche(kilometraje, propietario, color) {
        this._kilometraje = kilometraje || 0;
        this._propietario = propietario || "";
        this._color = color || "";
    }
    Object.defineProperty(Coche.prototype, "kilometraje", {
        // Getters
        get: function () {
            return this._kilometraje;
        },
        // Setters
        set: function (km) {
            this._kilometraje = km;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "propietario", {
        get: function () {
            return this._propietario;
        },
        set: function (nombre) {
            this._propietario = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    // Los métodos
    Coche.prototype.avanzar = function (numeroDeMetros) {
        this._kilometraje += numeroDeMetros;
    };
    Coche.prototype.retroceder = function (numeroDeMetros) {
        this._kilometraje += numeroDeMetros; //Aunque el coche retroceda, aumenta su kilometraje
    };
    return Coche;
}());
// Declaración de un nuevo coche
var miCoche = new Coche();
var miCoche2 = new Coche(180000, "CapitanFlam", "Rojo");
console.log("kilometraje al principio: " + miCoche2.kilometraje);
console.log("Avanzo ...");
miCoche2.avanzar(100);
console.log("Retrocedo...");
miCoche2.retroceder(50);
console.log("kilometraje al final: " + miCoche2.kilometraje);
console.log("Si cuando yo avanzo, tu retrocedes, ...");
var miCoche3 = new Coche(0, "", "rojo");
// Uso de los setters
miCoche.propietario = "Actarus";
miCoche.kilometraje = 120000;
miCoche.color = "gris";
// Mostrar el coche gracias a los getters
// console.log("Mi coche : " + miCoche.propietario + " - " + miCoche.kilometraje + " km - " + miCoche.color);
// console.log("Mi coche : " + miCoche2.propietario + " - " + miCoche2.kilometraje + " km - " + miCoche2.color);
// console.log("Mi coche : " + miCoche3.propietario + " - " + miCoche3.kilometraje + " km - " + miCoche3.color);
