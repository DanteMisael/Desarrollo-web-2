/* Para omitir la palabra function usamos Fat arrow =>*/
function Person(age) {
    var _this = this;
    this.age = age;
    // aquí el this es el objeto y no quien hace la llamada
    this.growOld = function () {
        _this.age++; //Entiendo que encapsula el age para que no sea Window 
    };
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000);
