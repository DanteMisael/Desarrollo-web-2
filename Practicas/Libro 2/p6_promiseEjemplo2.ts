const promise = new Promise((resolve, reject) => {
    reject(new Error("Algo malo a pasado"));
});

promise.then((res) => {
    //  Nunca se llama
});
    
promise.catch((err) => {
    console.log('Tengo una llamada: ', err.message); // Tengo una llamada: 'Algo malo a pasado'
});
    