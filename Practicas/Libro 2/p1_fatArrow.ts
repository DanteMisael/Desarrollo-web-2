/* Para omitir la palabra function usamos Fat arrow =>*/
function Person(age) {
    this.age = age
    // aquí el this es el objeto y no quien hace la llamada
    this.growOld = () => {
        this.age++;     //Entiendo que encapsula el age para que no sea Window 
                        // Lo que hace en JS es asignar this a una variable, así que supongo que sí
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000);
setTimeout(function() { console.log(person.age); },2000);