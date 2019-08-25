interface Lakes {
    name: string,
    area: number,
    lenght: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[],
    frozen?: string[],
    [extraProp: string]: any
}

let firstLake: Lakes = {
    name: 'Capitan mar',
    lenght: 1199,
    depth: 1025,
    area: 371000,
    isFreshwater: false,
    countries: ['Los Mochis','Russia','Guasave','Hola']
}

let secondLake: Lakes = {
    name: "Superior",
    depth: 66.6,
    lenght: 615,
    area: 82100,
    isFreshwater: true,
    countries: ['North', 'Always']
}

let thirdLake: Lakes = {
    name: "YaMeCansé",
    depth: 1010,
    lenght: 1010,
    area: 101,
    isFreshwater: true,
    countries: ['Gaia'],
    frozen: ['Ni que que fuera la pelicula jaja equis de']
}

let fourthLake: Lakes = {
    name: "Tangananica",
    depth: 123,
    lenght: 321,
    area: 231,
    isFreshwater: true,
    countries: ['imagination e-e'],
    kigoma: 'Nani',
    kalemie: 'Congo',
    otro: 'Gato'


}