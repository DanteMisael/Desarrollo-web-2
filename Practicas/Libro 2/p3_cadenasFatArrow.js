// A curried function, convertir la función en un único argumento :
var add = function (x) { return function (y) { return x + y; }; };
// Simple usage
console.log(add(123)(456));
// partially applied
var add123 = add(123);
// fully apply the function
console.log(add123(456));
