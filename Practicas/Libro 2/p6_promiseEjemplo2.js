var promise = new Promise(function (resolve, reject) {
    reject(new Error("Algo malo a pasado"));
});
promise.then(function (res) {
    //  Nunca se llama
});
promise["catch"](function (err) {
    console.log('Tengo una llamada: ', err.message); // Tengo una llamada: 'Algo malo a pasado'
});
