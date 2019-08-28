/* Función que retorna número aleatorio de un arreglo
    Cambié el tipo de arreglo a any[] para que se pudiera
    con todos los datos                                    */
function randomElem(theArray) {
    /*
    Math.random da un número aleatorio entre 1 y 0 de punto flotante.
    Math.floor redondea hace abajo

    La función regresa devuelve el emento del indice aleatorio*/
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var positions = [103, 458, 472, 458];
var randomPosition = console.log(randomElem(positions));
var colors = ['violet', 'indigo', 'blue', 'green'];
var randomColor = console.log(randomElem(colors));
