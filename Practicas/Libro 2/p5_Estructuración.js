/* Es cómo crear un método que acepta gran cantidad de parámetros ocmo array*/
function muchos(primero, segundo) {
    var allOthers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allOthers[_i - 2] = arguments[_i];
    }
    console.log(allOthers);
}
muchos('tercero', 'cuarto'); //Debería imprimir nada
muchos('tercero', 'cuarto', 'quinto', 'sexto'); //Debería imprimir los ultimos dos paramaetros
