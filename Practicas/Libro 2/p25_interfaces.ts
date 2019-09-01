interface a {
    b: number;
}

interface b extends a {
    c: string;
}

class test implements b {
    b: number;
    c: string;
    constructor (b: number, c: string) {
        this.b = b;
        this.c = c;
    }
}

var test1 = new test(1, "Hola");
 
console.log(test1.b);
console.log(test1.c);