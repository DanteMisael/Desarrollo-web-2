var test = /** @class */ (function () {
    function test(b, c) {
        this.b = b;
        this.c = c;
    }
    return test;
}());
var test1 = new test(1, "Hola");
console.log(test1.b);
console.log(test1.c);
