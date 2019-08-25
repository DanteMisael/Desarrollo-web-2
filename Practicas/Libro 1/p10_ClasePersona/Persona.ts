class Persona {
    name: string;
    constructor(theName: string){
        this.name = theName;
    }
    introduceSelf(){
        console.log("Hola, soy "+ this.name +" y soy de rancho.");
    }
}

let persona1 = new Persona("Jose Luis");
persona1.introduceSelf();