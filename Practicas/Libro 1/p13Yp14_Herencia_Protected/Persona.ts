class Person {
    private name: string;
    protected age: number;
    protected constructor(theName: string, theAge: number) {
        this.name = theName;
        this.age = theAge;
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
    constructor (name: string, age: number, yearsKnow: number){
        super(name, age);
        this.yearsKnow = yearsKnow;
    }
    timeKnow() {
        console.log("We have been friends for " + this.yearsKnow + " years.")
    }
    
    friendSince (){
        let firstAge = this.age - this.yearsKnow;
        /* La siguiente linea de código funciona porque tenemos las comillas al revés :v*/
        console.log(`Hemos sido amigos desde que tenía ${firstAge} años de edad.`)
    }
}

let amigo1 = new Friend("Elizalde", 19, 8);

amigo1.friendSince();