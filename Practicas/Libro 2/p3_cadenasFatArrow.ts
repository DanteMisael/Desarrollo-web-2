// A curried function, convertir la función en funciones de un único argumento : O eso entendí
let add = (x: number) => (y: number) => x + y;
// Simple usage
console.log(add(123)(456));
// partially applied
let add123 = add(123);
// fully apply the function
console.log(add123(456));