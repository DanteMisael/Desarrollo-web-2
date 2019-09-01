var Inicio = /** @class */ (function () {
    function Inicio(texto) {
        this.texto = texto;
    }
    Inicio.prototype.main = function () {
        console.log(this.texto);
        return 0;
    };
    return Inicio;
}());
var s = new Inicio("Hola mundo");
s.main();
