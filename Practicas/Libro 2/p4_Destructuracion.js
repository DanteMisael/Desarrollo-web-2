// Destructuración de objetos
var obj = { x: 1, y: 2, z: 3 };
console.log(obj.x);
var x = obj.x, y = obj.y, z = obj.z;
console.log(x);
//Destructuación de arrays
var array = [4, 5, 6];
console.log(array[0]);
x = array[0], y = array[1], z = array[2];
console.log(x);
//Destructuración de arrays con estructuración
var array2 = [1, 2, 3, 4];
var x = array2[0], y = array2[1], rest = array2.slice(2);
console.log(x, y, rest);
