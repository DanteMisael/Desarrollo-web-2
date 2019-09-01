class Inicio {
    private texto: String;
    constructor (texto: String){
        this.texto = texto;
    }

    public main () : number {
        console.log(this.texto);
        return 0;
    }
}

let s = new Inicio("Hola mundo");
s.main();