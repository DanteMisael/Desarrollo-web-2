class Person {
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }
    introduceSelf(){
        console.log("Hola, soy "+ this.name +" y soy de rancho.");
    }
}

/*Es importante recordar que el constructor de una clase
derivada siempre debe invocar al constructor de la clase 
base con una llamada a super()*/

class Friend extends Person {
    yearsKnow: number;
    constructor (name: string, yearsKnow: number){
        super(name);
        this.yearsKnow = yearsKnow;
    }
    timeKnow() {
        console.log("We have been friends for " + this.yearsKnow + " years.")
    }
}

let amigo1 = new Friend("Elizalde", 6);

amigo1.introduceSelf();
amigo1.timeKnow();