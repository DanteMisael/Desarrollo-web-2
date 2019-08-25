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
var Shape = /** @class */ (function () {
    function Shape(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.area = width * height;
        name = this.name;
        this.color = "pink";
    }
    ;
    Shape.prototype.shotout = function () {
        console.log("Soy un " + this.name + " " + this.color + " con un area de " + this.area + " cm cuadrados");
        console.log("Area de la figura : " + this.area);
        console.log("Nombre de la figura : " + this.name);
        console.log("Color de la figura : " + this.color);
        console.log("Largo de figura : " + this.width);
        console.log("Ancho de figura : " + this.height);
    };
    return Shape;
}());
var Shape3D = /** @class */ (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, width, height, lenght) {
        var _this = _super.call(this, name, width, height) || this;
        _this.name = name;
        _this.volume = lenght * _this.area;
        return _this;
    }
    ;
    Shape3D.prototype.shotout = function () {
        return "Soy " + this.name + " con un volumen de " + this.volume + " cm cubicos.";
    };
    Shape3D.prototype.superShout = function () {
        return _super.prototype.shotout.call(this);
    };
    return Shape3D;
}(Shape));
var shape = new Shape("cuadrito", 100, 100);
console.log(shape.shotout());
var cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shotout());
console.log(cube.superShout());
