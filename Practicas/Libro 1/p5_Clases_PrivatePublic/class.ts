class Shape {
    area: number;
    private color: string;

    constructor ( public name: string, public width: number, public height: number ){
        this.area = width * height;
        this.color = "pink";
    };
    shotout(){
        console.log("Soy un " + name + this.color + " con un area de " + this.area + " cm cuadrados");
        console.log("Area de la figura : " + this.area);
        console.log("Nombre de la figura : " + name);
        console.log("Color de la figura : " + this.color);
        console.log("Largo de figura : " + width);
        console.log("Ancho de figura : "+ height);
    }
}

var shape = new Shape("cuadro", 100, 100);
shape.shotout();