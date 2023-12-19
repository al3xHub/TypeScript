function traductorPitufo(palabra: string): string {
    return "Pitufos";
    }
    let frase: string = "Cuando un pitufo se hace un morado es igual que si nosotros no nos hacemos nada";
    let tabPalabras: string[] = frase.split(' ');
    for (let i = 0; i < tabPalabras.length; i++) {
    console.log(traductorPitufo (tabPalabras [i]));
    }

traductorPitufo(frase);