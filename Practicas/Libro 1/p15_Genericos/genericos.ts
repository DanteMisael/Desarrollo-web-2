/* Función que retorna número aleatorio de un arreglo 
    Cambié el tipo de arreglo a any[] para que se pudiera 
    con todos los datos                                    */

function randomIntElem(theArray: number[]): number {
    /*
    Math.random da un número aleatorio entre 1 y 0 de punto flotante.
    Math.floor redondea hace abajo

    La función regresa devuelve el emento del indice aleatorio*/
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

function randomStrElem(theArray: string[]): string {
    /*
    Math.random da un número aleatorio entre 1 y 0 de punto flotante.
    Math.floor redondea hace abajo

    La función regresa devuelve el emento del indice aleatorio*/
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

/*function randomElem(theArray: any[]): any {
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}*/

function randomElem<T>(theArray: T[]): T {
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

/*El console.log lo usé para ver que funcionan
  El primer conjunto es de numeros
  El segundo de cadenas
  El cuarto es para datos de cualquier tipo
  El cuarto devuelve elementos aleatorios
let positions: number[] = [103, 458, 472, 458];
let randomPosition: number = randomIntElem(positions);

let colors = ['violet', 'indigo', 'blue', 'green'];
let randomColor: string = randomStrElem(colors);

let randomPosition2 = randomElem(positions);
let randomColor2 = randomElem(colors);*/

/* Si intentamos cambiar de string a numero no deja
    Significa que genericos es mas seguro que any */
let colors: string[] = ['violet', 'indigo', 'blue', 'green'];
let randomColor: string = randomElem(colors);
