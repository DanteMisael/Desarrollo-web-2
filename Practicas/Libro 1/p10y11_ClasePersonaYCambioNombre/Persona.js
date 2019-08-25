var Persona = /** @class */ (function () {
    function Persona(theName) {
        this.name = theName;
    }
    Persona.prototype.introduceSelf = function () {
        console.log("Hola, soy " + this.name + " y soy de rancho.");
    };
    return Persona;
}());
var persona1 = new Persona("Jose Luis");
persona1.introduceSelf();
