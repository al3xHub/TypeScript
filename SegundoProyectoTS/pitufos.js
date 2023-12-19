function traductorPitufo(palabra) {
    return "Pitufos";
}
var frase = "Cuando un pitufo se hace un morado es igual que si nosotros no nos hacemos nada";
var tabPalabras = frase.split(' ');
for (var i = 0; i < tabPalabras.length; i++) {
    console.log(traductorPitufo(tabPalabras[i]));
}
traductorPitufo(frase);
