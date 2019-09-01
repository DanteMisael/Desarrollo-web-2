//Usas super cuando no tenemos fat Arrows
// Si usaramos fat Arrows log debería ser una función con flecha y accedemos normal en la clase hija
class Base {
    log() { console.log('hello world'); }
}
    
class Child extends Base {
    log() { super.log() };
}