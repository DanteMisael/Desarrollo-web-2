/*Propiedades estáticas*/

class Something {
    static instances = 0;
    constructor() {
    // Acedemos directamente mediante el nombre de la clase
    Something.instances++;
    }
    }
    var s1 = new Something();  //Incrementa la propiedad estatica a 1
    var s2 = new Something();   //Incrementa la propiedad estatica a 2
    console.log(Something.instances); // 2
    