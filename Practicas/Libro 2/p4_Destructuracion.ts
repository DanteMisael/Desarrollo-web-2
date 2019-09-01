// Destructuración de objetos
var obj = {x: 1, y: 2, z: 3};
console.log( obj.x);

var {x, y, z} = obj;
console.log(x);

//Destructuación de arrays
let array = [4, 5, 6];
console.log(array[0]);

[x, y, z] = array;
console.log(x);

//Destructuración de arrays con estructuración
let array2 = [1,2,3,4];
var [x,y, ...rest] = array2;
console.log(x,y,rest);