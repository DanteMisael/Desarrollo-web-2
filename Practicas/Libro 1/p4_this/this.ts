var shape = {
    name: "rectangle",
    popup: function(){
        console.log('This inside popup(): ' + this.name);
        /* setTimeout( function() {    Linea orignal de código*/
        setTimeout( () => {         /* Se crea una varia _this en JS para referirseal this*/
            console.log('This inside setTimeout(): ' + this.name);
            console.log("Soy un " + this.name + "!");
        }, 3000);
    }
};

shape.popup();