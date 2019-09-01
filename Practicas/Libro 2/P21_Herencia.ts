// Herencia
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
        move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
    
class Snake extends Animal {
    constructor(name: string) { super(name); }
        move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
    
class Rhino extends Animal {
    constructor(name: string) { super(name); }
        move(distanceInMeters = 10) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
    
class Elephant extends Animal {
    constructor(name: string) { super(name); }
        move(distanceInMeters = 20) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

// Para poder Crear un array con este typo de objetos tenemos que utilizar la clase Padre Ej:
let array : Animal[] = [ new Rhino('Rinoceronte'), new Snake("Serpiente"), new Elephant("Elefantin") ];
// El acceso a este ejemplo sería muchisimo más sencillo
let ej2 = {Rhino: new Rhino('Rinoceronte'), Snake: new Snake("Serpiente"), Elephant:new Elephant("Elefantin")};
console.log(array);
console.log(ej2);