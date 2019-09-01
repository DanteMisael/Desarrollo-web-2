Promise.reject(new Error('something bad happened'))
    .then((res) => {
        console.log(res); // not called
        return 456;
    })
    .catch((err) => {
        console.log(err.message); // something bad happened  Se llama después al promise desde el catch
        return Promise.resolve(123);
    })
    .then((res) => {
        console.log(res); // 123
    })
