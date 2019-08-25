interface Shape { /* Nombres a tipos de objetos*/
    name: string;  
    width: number;
    height: number;
    color?: string;
}

function area(shape : Shape ){ /*Se puede usar como anotación de tipo */
    var area = shape.width * shape.height;
return "Soy " + shape.name + " con area " + area +" cm cuadrados";
}
/* Los dos primeros están bien, el último es para generar un error y hacer notar necesario el nombre */
console.log( area({name: "rectangulo", width: 30, height: 15}) );
console.log( area({name: "cuadro", width: 30, height: 30, color: "blue"}));
console.log( area({width: 19, height: 30}));