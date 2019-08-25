class Shape {
    area: number;
    private color: string;

    constructor ( public name: string, public width: number, public height: number ){
        this.area = width * height;
        name = this.name;
        this.color = "pink";
    };

    
    shotout() {
        console.log("Soy un " + this.name +" "+ this.color + " con un area de " + this.area + " cm cuadrados");
        console.log("Area de la figura : " + this.area);
        console.log("Nombre de la figura : " + this.name);
        console.log("Color de la figura : " + this.color);
        console.log("Largo de figura : " + this.width);
        console.log("Ancho de figura : "+ this.height);
    }
}

class Shape3D extends Shape {
    volume: number;

    constructor ( public name: string, width: number, height: number, lenght: number){
        super(name, width, height);
        this.volume = lenght * this.area;
    };

    shotout(){
        return "Soy "+ this.name + " con un volumen de " + this.volume + " cm cubicos.";
    }

    superShout(){
        return super.shotout();
    }
}

var shape = new Shape("cuadrito", 100, 100);
console.log( shape.shotout() );

var cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shotout() );
console.log( cube.superShout() );

