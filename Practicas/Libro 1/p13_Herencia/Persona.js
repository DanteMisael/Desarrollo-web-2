var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hola, soy " + this.name + " y soy de rancho.");
    };
    return Person;
}());
/*Es importante recordar que el constructor de una clase
derivada siempre debe invocar al constructor de la clase
base con una llamada a super()*/
var Friend = /** @class */ (function (_super) {
    __extends(Friend, _super);
    function Friend(name, yearsKnow) {
        var _this = _super.call(this, name) || this;
        _this.yearsKnow = yearsKnow;
        return _this;
    }
    Friend.prototype.timeKnow = function () {
        console.log("We have been friends for " + this.yearsKnow + " years.");
    };
    return Friend;
}(Person));
var amigo1 = new Friend("Elizalde", 6);
amigo1.introduceSelf();
amigo1.timeKnow();
