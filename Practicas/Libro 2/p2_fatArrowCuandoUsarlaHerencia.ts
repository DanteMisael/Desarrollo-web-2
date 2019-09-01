class Adder {
    // Se use el fatArrow para usarla en otra clase
    add = (b: string): string => {
        return this.a + b;
    }
}

class ExtendedAdder extends Adder {
    // Guarda el método en una variable como te enseñan en el libro a usar los métodos
    private superAdd = this.add;
    // Ahora crea el override, o sobreescribir el método
    add = (b: string): string => {
        console.log(this.superAdd(b))
        return this.superAdd(b);
    }
}
    