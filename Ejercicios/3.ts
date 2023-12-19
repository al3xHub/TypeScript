class FormaGeometrica{
    private _color: string;
    private _grosorBorde: number;
    private _tipo: string;

    constructor(color: string, grosorBorde: number, tipo: string){
        this._color=color;
        this._grosorBorde=grosorBorde;
        this._tipo=tipo;
    }

    get color(): string{
        return this._color;
    
    }
    get grosorBorde(): number{
        return this._grosorBorde;
    
    }
    get tipo(): string{
        return this._tipo;
    
    }

    set color(color: string){
        this._color=color;
    }

    set grosorBorde(grosorBorde: number){
        this._grosorBorde=grosorBorde;
    }

    set tipo(tipo: string){
        this._tipo=tipo;
    }
}

class Cuadrado extends FormaGeometrica{
    private _lado: number;

    constructor(color: string, grosorBorde: number,tipo:string, lado: number){
        super(color, grosorBorde, tipo);
        this._lado=lado;
    }

    get lado(): number{
        return this._lado;
    }

    set lado(lado: number){
        this._lado=lado;
    }
}

class Circulo extends FormaGeometrica{
    private _diametro: number;
    private _radio: number;

    constructor(color: string, grosorBorde: number, tipo:string, diametro: number, radio:number){
        super(color, grosorBorde, tipo);
        this._diametro=diametro;
        this._radio=radio;
    }

    get diametro(): number{
        return this._diametro
    }

    get radio(): number{
        return this._radio
    }

    set diametro(diametro: number){
        this._diametro=diametro;
    }

    set radio(radio: number){
        this._radio=radio;
    }
    
}

class Triangulo extends FormaGeometrica{
    private _base: number;
    private _altura: number;

    constructor(color: string, grosorBorde: number, tipo:string, base: number, altura: number){
        super(color, grosorBorde, tipo);
        this._base=base;
        this._altura=altura;
    }

    get base(): number{
        return this._base;
    
    }

    get altura(): number{
        return this._altura;
    
    }

    set base(base: number){
        this._base=base;
    
    }

    set altura(altura: number){
        this._altura=altura;
    
    }
}

let cuadrado = new Cuadrado("rojo", 5, "equilatero", 10);
let circulo = new Circulo("azul", 2,"ovalado", 10, 5);
let triangulo = new Triangulo("verde", 1,"equilatero", 5, 10);

console.log(cuadrado);
console.log(circulo);
console.log(triangulo);
