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

let f = new FormaGeometrica("rojo", 5, "cuadrado");

function mostrar(f: FormaGeometrica){
    console.log(f.color);
    console.log(f.grosorBorde);
    console.log(f.tipo);
}

mostrar(f);

