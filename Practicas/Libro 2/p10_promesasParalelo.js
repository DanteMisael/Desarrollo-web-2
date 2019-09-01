//-------- main.ts ---------
// Una función asincróna simulando la petición desde el servidor
function loadItem(id) {
    return new Promise(function (resolve) {
        console.log('Cargando item', id);
        setTimeout(function () {
            resolve({ id: id });
        }, 1000);
    });
}
// Cadena (serie)
var item1, item2;
loadItem(1)
    .then(function (res) {
    item1 = res;
    return loadItem(2);
})
    .then(function (res) {
    item2 = res;
    console.log('Hecho cadena');
}); // overall time will be around 2s
// Paralelo
Promise.all([loadItem(1), loadItem(2)])
    .then(function (res) {
    item1 = res[0], item2 = res[1];
    console.log('Listo');
}); // overall time will be around 1s
