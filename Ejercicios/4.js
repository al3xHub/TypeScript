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
var main;
(function (main) {
    var FormaGeometrica = /** @class */ (function () {
        function FormaGeometrica(color, grosorBorde, tipo) {
            this._color = color;
            this._grosorBorde = grosorBorde;
            this._tipo = tipo;
        }
        Object.defineProperty(FormaGeometrica.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (color) {
                this._color = color;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormaGeometrica.prototype, "grosorBorde", {
            get: function () {
                return this._grosorBorde;
            },
            set: function (grosorBorde) {
                this._grosorBorde = grosorBorde;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormaGeometrica.prototype, "tipo", {
            get: function () {
                return this._tipo;
            },
            set: function (tipo) {
                this._tipo = tipo;
            },
            enumerable: false,
            configurable: true
        });
        return FormaGeometrica;
    }());
    main.FormaGeometrica = FormaGeometrica;
    var Cuadrado = /** @class */ (function (_super) {
        __extends(Cuadrado, _super);
        function Cuadrado(color, grosorBorde, tipo, lado) {
            var _this = _super.call(this, color, grosorBorde, tipo) || this;
            _this._lado = lado;
            return _this;
        }
        Object.defineProperty(Cuadrado.prototype, "lado", {
            get: function () {
                return this._lado;
            },
            set: function (lado) {
                this._lado = lado;
            },
            enumerable: false,
            configurable: true
        });
        return Cuadrado;
    }(FormaGeometrica));
    main.Cuadrado = Cuadrado;
    var Circulo = /** @class */ (function (_super) {
        __extends(Circulo, _super);
        function Circulo(color, grosorBorde, tipo, diametro, radio) {
            var _this = _super.call(this, color, grosorBorde, tipo) || this;
            _this._diametro = diametro;
            _this._radio = radio;
            return _this;
        }
        Object.defineProperty(Circulo.prototype, "diametro", {
            get: function () {
                return this._diametro;
            },
            set: function (diametro) {
                this._diametro = diametro;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Circulo.prototype, "radio", {
            get: function () {
                return this._radio;
            },
            set: function (radio) {
                this._radio = radio;
            },
            enumerable: false,
            configurable: true
        });
        return Circulo;
    }(FormaGeometrica));
    main.Circulo = Circulo;
    var Triangulo = /** @class */ (function (_super) {
        __extends(Triangulo, _super);
        function Triangulo(color, grosorBorde, tipo, base, altura) {
            var _this = _super.call(this, color, grosorBorde, tipo) || this;
            _this._base = base;
            _this._altura = altura;
            return _this;
        }
        Object.defineProperty(Triangulo.prototype, "base", {
            get: function () {
                return this._base;
            },
            set: function (base) {
                this._base = base;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Triangulo.prototype, "altura", {
            get: function () {
                return this._altura;
            },
            set: function (altura) {
                this._altura = altura;
            },
            enumerable: false,
            configurable: true
        });
        return Triangulo;
    }(FormaGeometrica));
    main.Triangulo = Triangulo;
    var cuadrado = new main.Cuadrado("rojo", 5, "equilatero", 10);
    var circulo = new main.Circulo("azul", 2, "ovalado", 10, 5);
    var triangulo = new main.Triangulo("verde", 1, "equilatero", 5, 10);
    console.log(cuadrado);
    console.log(circulo);
    console.log(triangulo);
})(main || (main = {}));
