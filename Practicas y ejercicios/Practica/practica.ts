module main {
    //crear clase persona
    export class Persona {
        // atributos apellidos, nombre, sexo, edad, altura y peso.
        private _apellidos: string;
        private _nombre: string;
        private _sexo: string;
        private _edad: number;
        private _altura: number;
        private _peso: number;

        //constructor
        constructor(apellidos: string, nombre: string, sexo: string, edad: number, altura: number, peso: number) {
            this._apellidos = apellidos;
            this._nombre = nombre;
            this._sexo = sexo;
            this._edad = edad;
            this._altura = altura;
            this._peso = peso;
        }

        // Getters
        get apellidos(): string {
            return this._apellidos;
        }
        get nombre(): string {
            return this._nombre;
        }
        get sexo(): string {
            return this._sexo;
        }
        get edad(): number {
            return this._edad;
        }
        get altura(): number {
            return this._altura;
        }
        get peso(): number {
            return this._peso;
        }

        //Setters
        set apellidos(apellidos: string) {
            this._apellidos = apellidos;
        }
        set nombre(nombre: string) {
            this._nombre = nombre;
        }
        set sexo(sexo: string) {
            this._sexo = sexo;
        }
        set edad(edad: number) {
            this._edad = edad;
        }
        set altura(altura: number) {
            this._altura = altura;
        }
        set peso(peso: number) {
            this._peso = peso;
        }
    }
    //crear clase estudiante
    export class Estudiante extends Persona {
        //atributo promoción
        private _promocion: string;
        //constructor
        constructor(apellidos: string, nombre: string, sexo: string, edad: number, altura: number, peso: number, promocion: string) {
            super(apellidos, nombre, sexo, edad, altura, peso);
            this._promocion = promocion;
        }

        //Getters
        get promocion(): string {
            return this._promocion;
        }
        //Setters
        set promocion(promocion: string) {
            this._promocion = promocion;
        }
    }
    //crear clase curso
    export class Curso {
        private _materia: string;

        //constructor
        constructor(materia: string) {
            this._materia = materia;
        }

        //Getters
        get materia(): string {
            return this._materia;
        }

        //Setters
        set materia(materia: string) {
            this._materia = materia;
        }
    }
    //crear clase formador
    export class Formador extends Persona {
        //atributo curso de tipo curso
        private _listaDeCursos: Curso[];

        //constructor
        constructor(apellidos: string, nombre: string, sexo: string, edad: number, altura: number, peso: number, listaDeCursos: Curso[]) {
            super(apellidos, nombre, sexo, edad, altura, peso);
            this._listaDeCursos = listaDeCursos;
        }

        //Getters
        get listaDeCursos(): Curso[] {
            return this._listaDeCursos;
        }
        //Setters
        set listaDeCursos(listaDeCursos: Curso[]) {
            this._listaDeCursos = listaDeCursos;
        }

        //metodo que muestra los cursos del formador
        mostrarCursos() {
            for (let i = 0; i < this._listaDeCursos.length; i++) {
                console.log(this._listaDeCursos[i].materia);
            }
        }

        //metodo que añade cursos
        addCurso(curso: Curso) {
            this._listaDeCursos.push(curso);
        }

        // método mostrarFormador()
        mostrarFormador() {
            console.log("Yo, " + this.nombre + " " + this.apellidos + ", enseño cursos de: ");
            this.mostrarCursos();
        }
    }

    //creamos dos instancias de curso
    let curso1:main.Curso = new main.Curso("Java");
    let curso2:main.Curso = new main.Curso("JavaScript");

    //creamos una instancia de formador
    let formador1:main.Formador = new main.Formador("Bueno Viñan", "Alejandro", "Varón", 31, 1.65, 64, [curso1, curso2]);

    formador1.mostrarFormador();
}
