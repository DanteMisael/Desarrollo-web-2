interface People {
    name: string;
}

interface Family {
    name: string;
    age: number;
    relation: string;
}

interface Celebrity extends People {
    profession: string;
}

function printName<T extends People>(theInput: T): void {
    console.log(`Mi nombre es ${theInput.name}`)
}

let selena: Celebrity = {
    name: 'Selena Quintanilla',
    profession: 'Cantante'
}
let MisaMisa: Family = {
    name: 'Misa',
    age: 20,
    relation: 'sOYyO'
}
/* Acepta cualquier objeta que extienda a people*/
printName(MisaMisa);