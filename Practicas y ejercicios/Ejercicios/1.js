var Empleado = /** @class */ (function () {
    function Empleado(nombre, apellidos, edad) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
    }
    Object.defineProperty(Empleado.prototype, "Nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "Apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (apellidos) {
            this._apellidos = apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "Edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    return Empleado;
}());
var empleado1 = new Empleado("Juan", "Perez", 30);
console.log("El nombre del empleado es ".concat(empleado1.Nombre, ", el apellido es ").concat(empleado1.Apellidos, " y su edad es de ").concat(empleado1.Edad, " a\u00F1os"));
