/* Es cómo crear un método que acepta gran cantidad de parámetros ocmo array*/
function muchos(primero, segundo, ...allOthers){
    console.log(allOthers);
}

muchos('tercero', 'cuarto'); //Debería imprimir nada

muchos('tercero', 'cuarto', 'quinto', 'sexto'); //Debería imprimir los ultimos dos paramaetros