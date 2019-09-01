//-------- main.ts ---------
// Una función asincróna simulando la petición desde el servidor
function loadItem(id: number): Promise<{id: number}> {
    return new Promise((resolve)=>{
        console.log('Cargando item', id);
        setTimeout(() => { // simulate a server delay
            resolve({ id: id });
        }, 1000);
    });
}

// Cadena (serie)
let item1, item2;
loadItem(1)
    .then((res) => {
        item1 = res;
        return loadItem(2);
    })
    .then((res) => {
        item2 = res;
        console.log('Hecho cadena');
    }); // overall time will be around 2s
    
// Paralelo
Promise.all([loadItem(1),loadItem(2)])
    .then((res) => {
        [item1,item2] = res;
        console.log('Listo')
    }); // overall time will be around 1s
    