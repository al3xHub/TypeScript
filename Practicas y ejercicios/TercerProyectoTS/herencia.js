var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Definición de la clase Vehículo
var Vehiculo = /** @class */ (function () {
    // El constructor
    function Vehiculo(kilometraje, propietario, color) {
        this._kilometraje = kilometraje;
        this._propietario = propietario;
        this._color = color;
    }
    Object.defineProperty(Vehiculo.prototype, "kilometraje", {
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
    Object.defineProperty(Vehiculo.prototype, "propietario", {
        get: function () {
            return this._propietario;
        },
        set: function (nombre) {
            this._propietario = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "color", {
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
    Vehiculo.prototype.avanzar = function (numeroDeMetros) {
        this._kilometraje += numeroDeMetros;
    };
    Vehiculo.prototype.retroceder = function (numeroDeMetros) {
        this._kilometraje += numeroDeMetros;
    };
    return Vehiculo;
}());
// Definición de la clase CocheHeredado
var CocheHeredado = /** @class */ (function (_super) {
    __extends(CocheHeredado, _super);
    function CocheHeredado(kilometraje, propietario, color) {
        return _super.call(this, kilometraje, propietario, color) || this;
    }
    return CocheHeredado;
}(Vehiculo));
var TractorCortacesped = /** @class */ (function (_super) {
    __extends(TractorCortacesped, _super);
    function TractorCortacesped(kilometraje, propietario, color) {
        return _super.call(this, kilometraje, propietario, color) || this;
    }
    TractorCortacesped.prototype.bajar = function (numDeCm) {
        console.log("La hélice baja " + numDeCm + " centímetros");
    };
    TractorCortacesped.prototype.subir = function (numDeCm) {
        console.log("La hélice sube " + numDeCm + " centímetros ");
    };
    return TractorCortacesped;
}(Vehiculo));
var tesla = new CocheHeredado(666, "García Julián", "Azul Marino");
var tt = new TractorCortacesped(12, " García Julián ", "Verde");
console.log("Kilometraje : " + tt.kilometraje);
tt.bajar(10);
tt.avanzar(0.1);
tt.subir(10);
tt.retroceder(0.1);
console.log("Kilometraje: " + tt.kilometraje);
