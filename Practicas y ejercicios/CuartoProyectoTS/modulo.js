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
var miModulo;
(function (miModulo) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(marca, modelo) {
            this.marca = marca;
            this.modelo = modelo;
        }
        Object.defineProperty(Vehiculo.prototype, "Marca", {
            //getters
            get: function () {
                return this.marca;
            },
            //setters
            set: function (marca) {
                this.marca = marca;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehiculo.prototype, "Modelo", {
            get: function () {
                return this.modelo;
            },
            set: function (modelo) {
                this.modelo = modelo;
            },
            enumerable: false,
            configurable: true
        });
        Vehiculo.prototype.metodoDelVehiculo = function () {
            console.log("Método del vehiculo.");
        };
        return Vehiculo;
    }());
    miModulo.Vehiculo = Vehiculo;
    var Coche = /** @class */ (function (_super) {
        __extends(Coche, _super);
        function Coche() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Coche.prototype.metodoDelCoche = function () {
            console.log("Método del coche.");
        };
        return Coche;
    }(Vehiculo));
    miModulo.Coche = Coche;
    var TractorCortacesped = /** @class */ (function (_super) {
        __extends(TractorCortacesped, _super);
        function TractorCortacesped() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TractorCortacesped.prototype.metodoDelTractorCortacesped = function () {
            console.log("Método del tractor cortacésped.");
        };
        return TractorCortacesped;
    }(Vehiculo));
    miModulo.TractorCortacesped = TractorCortacesped;
})(miModulo || (miModulo = {}));
var miCoche = new miModulo.Vehiculo("Tesla", "3");
miCoche.metodoDelVehiculo();
