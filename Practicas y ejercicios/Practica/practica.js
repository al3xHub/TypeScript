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
    //crear clase persona
    var Persona = /** @class */ (function () {
        //constructor
        function Persona(apellidos, nombre, sexo, edad, altura, peso) {
            this._apellidos = apellidos;
            this._nombre = nombre;
            this._sexo = sexo;
            this._edad = edad;
            this._altura = altura;
            this._peso = peso;
        }
        Object.defineProperty(Persona.prototype, "apellidos", {
            // Getters
            get: function () {
                return this._apellidos;
            },
            //Setters
            set: function (apellidos) {
                this._apellidos = apellidos;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "nombre", {
            get: function () {
                return this._nombre;
            },
            set: function (nombre) {
                this._nombre = nombre;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "sexo", {
            get: function () {
                return this._sexo;
            },
            set: function (sexo) {
                this._sexo = sexo;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "edad", {
            get: function () {
                return this._edad;
            },
            set: function (edad) {
                this._edad = edad;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "altura", {
            get: function () {
                return this._altura;
            },
            set: function (altura) {
                this._altura = altura;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "peso", {
            get: function () {
                return this._peso;
            },
            set: function (peso) {
                this._peso = peso;
            },
            enumerable: false,
            configurable: true
        });
        return Persona;
    }());
    main.Persona = Persona;
    //crear clase estudiante
    var Estudiante = /** @class */ (function (_super) {
        __extends(Estudiante, _super);
        //constructor
        function Estudiante(apellidos, nombre, sexo, edad, altura, peso, promocion) {
            var _this = _super.call(this, apellidos, nombre, sexo, edad, altura, peso) || this;
            _this._promocion = promocion;
            return _this;
        }
        Object.defineProperty(Estudiante.prototype, "promocion", {
            //Getters
            get: function () {
                return this._promocion;
            },
            //Setters
            set: function (promocion) {
                this._promocion = promocion;
            },
            enumerable: false,
            configurable: true
        });
        return Estudiante;
    }(Persona));
    main.Estudiante = Estudiante;
    //crear clase curso
    var Curso = /** @class */ (function () {
        //constructor
        function Curso(materia) {
            this._materia = materia;
        }
        Object.defineProperty(Curso.prototype, "materia", {
            //Getters
            get: function () {
                return this._materia;
            },
            //Setters
            set: function (materia) {
                this._materia = materia;
            },
            enumerable: false,
            configurable: true
        });
        return Curso;
    }());
    main.Curso = Curso;
    //crear clase formador
    var Formador = /** @class */ (function (_super) {
        __extends(Formador, _super);
        //constructor
        function Formador(apellidos, nombre, sexo, edad, altura, peso, listaDeCursos) {
            var _this = _super.call(this, apellidos, nombre, sexo, edad, altura, peso) || this;
            _this._listaDeCursos = listaDeCursos;
            return _this;
        }
        Object.defineProperty(Formador.prototype, "listaDeCursos", {
            //Getters
            get: function () {
                return this._listaDeCursos;
            },
            //Setters
            set: function (listaDeCursos) {
                this._listaDeCursos = listaDeCursos;
            },
            enumerable: false,
            configurable: true
        });
        //metodo que muestra los cursos del formador
        Formador.prototype.mostrarCursos = function () {
            for (var i = 0; i < this._listaDeCursos.length; i++) {
                console.log(this._listaDeCursos[i].materia);
            }
        };
        //metodo que añade cursos
        Formador.prototype.addCurso = function (curso) {
            this._listaDeCursos.push(curso);
        };
        // método mostrarFormador()
        Formador.prototype.mostrarFormador = function () {
            console.log("Yo, " + this.nombre + " " + this.apellidos + ", enseño cursos de: ");
            this.mostrarCursos();
        };
        return Formador;
    }(Persona));
    main.Formador = Formador;
    //creamos dos instancias de curso
    var curso1 = new main.Curso("Java");
    var curso2 = new main.Curso("JavaScript");
    //creamos una instancia de formador
    var formador1 = new main.Formador("Bueno Viñan", "Alejandro", "Varón", 31, 1.65, 64, [curso1, curso2]);
    formador1.mostrarFormador();
})(main || (main = {}));
