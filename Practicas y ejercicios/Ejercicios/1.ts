class Empleado{
    private _nombre: string;
    private _apellidos: string;
    private _edad : number;

    constructor(nombre: string, apellidos: string, edad: number){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
    }

    get Nombre(): string{
        return this._nombre;
    
    }

    get Apellidos(): string{
        return this._apellidos;
    
    }

    get Edad(): number{
        return this._edad;
    
    }

    set Nombre(nombre: string){
        this._nombre = nombre;
    }

    set Apellidos(apellidos: string){
        this._apellidos = apellidos;
    
    }

    set Edad(edad: number){
        this._edad = edad;
    
    
    }


}

let empleado1 = new Empleado("Juan", "Perez", 30);

console.log(`El nombre del empleado es ${empleado1.Nombre}, el apellido es ${empleado1.Apellidos} y su edad es de ${empleado1.Edad} años`);