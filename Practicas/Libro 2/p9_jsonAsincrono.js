loadJSONASync('good.json')
    .then(function (val) { console.log(val); })["catch"](function (err) {
    console.log('good.json error', err.message);
})
    .then(function () {
    return loadJSONASync('absent.json');
})
    .then(function (val) { console.log(val); })["catch"](function (err) {
    console.log('absent.json error', err.message);
})
    .then(function () {
    return loadJSONASync('bad.json');
})
    .then(function (val) { console.log(val); })["catch"](function (err) {
    console.log('bad.json error', err.message);
});
