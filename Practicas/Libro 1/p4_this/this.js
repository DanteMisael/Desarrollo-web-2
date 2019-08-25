var shape = {
    name: "rectangle",
    popup: function () {
        var _this = this;
        console.log('This inside popup(): ' + this.name);
        /* setTimeout( function() {    Linea orignal de código*/
        setTimeout(function () {
            console.log('This inside setTimeout(): ' + _this.name);
            console.log("Soy un " + _this.name + "!");
        }, 3000);
    }
};
shape.popup();
