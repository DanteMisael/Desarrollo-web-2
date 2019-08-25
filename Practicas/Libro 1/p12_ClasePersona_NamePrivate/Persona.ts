class Person {
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }
    introduceSelf(){
        console.log("Hola, soy "+ this.name +" y soy de rancho.");
    }
}

let humano1 = new Person("Jose Luis");
humano1.introduceSelf();

humano1.name = "La Chona";
humano1.introduceSelf();