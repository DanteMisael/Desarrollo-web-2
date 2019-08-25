function area(shape: string, width: number, height: number) {
    var area = width * height;
    return "I'm a "+ shape + " with an area of "+ area + " cm squared.";
}document.body.innerHTML = area("cuadro", 100, 15); /*Error como pasar parametro incorrecto genera el JS, pero con error*/