var Shape = /** @class */ (function () {
    function Shape(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.area = width * height;
        this.color = "pink";
    }
    ;
    Shape.prototype.shotout = function () {
        console.log("Soy un " + name + this.color + " con un area de " + this.area + " cm cuadrados");
        console.log("Area de la figura : " + this.area);
        console.log("Nombre de la figura : " + name);
        console.log("Color de la figura : " + this.color);
        console.log("Largo de figura : " + width);
        console.log("Ancho de figura : " + height);
    };
    return Shape;
}());
var shape = new Shape("cuadro", 100, 100);
shape.shotout();
