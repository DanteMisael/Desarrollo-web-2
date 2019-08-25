var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hola, soy " + this.name + " y soy de rancho.");
    };
    return Person;
}());
var humano1 = new Person("Jose Luis");
humano1.introduceSelf();
humano1.name = "La Chona";
humano1.introduceSelf();
