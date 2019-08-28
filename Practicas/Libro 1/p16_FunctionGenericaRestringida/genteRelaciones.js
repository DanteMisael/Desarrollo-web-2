function printName(theInput) {
    console.log("Mi nombre es " + theInput.name);
}
var selena = {
    name: 'Selena Quintanilla',
    profession: 'Cantante'
};
var MisaMisa = {
    name: 'Misa',
    age: 20,
    relation: 'sOYyO'
};
/* Acepta cualquier objeta que extienda a people*/
printName(MisaMisa);
