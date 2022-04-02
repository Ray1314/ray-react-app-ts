var express = require('express');
var app = express();
var defaultres = {code: 200, data: "abc"}
// app.use((req, res, next) => {
//     res.set({
//         'Access-Control-Allow-Credentials': true,
//         'Access-Control-Max-Age': 1728000,
//         'Access-Control-Allow-Origin': req.headers.origin || '*',
//         'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
//         'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
//         'Content-Type': 'application/json; charset=utf-8'
//     })
//     req.method === 'OPTIONS' ? res.status(204).end() : next()
// })
app.get('/', function(req, res) {
    res.send(defaultres);
});

app.listen(6060);
