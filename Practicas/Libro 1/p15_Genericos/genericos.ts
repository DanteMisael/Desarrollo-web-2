/* Función que retorna número aleatorio de un arreglo 
    Cambié el tipo de arreglo a any[] para que se pudiera 
    con todos los datos                                    */

function randomElem(theArray: any[]): number {
    /*
    Math.random da un número aleatorio entre 1 y 0 de punto flotante.
    Math.floor redondea hace abajo

    La función regresa devuelve el emento del indice aleatorio*/
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

/*El console.log lo usé para ver que funcionan*/
let positions: number[] = [103, 458, 472, 458];
let randomPosition = console.log(randomElem(positions));

let colors = ['violet', 'indigo', 'blue', 'green'];
let randomColor = console.log(randomElem(colors));
