//------ main.ts --------
function* generator(){
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
}
    
var iterator = generator();
//El generador se empieza en el primer NExt
//En cada next inicia el generador donde lo dejó el next anterior usando el yiel
console.log('Starting iteration'); // Esto se ejecutará antes que nada de dentro del método generator()
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
    