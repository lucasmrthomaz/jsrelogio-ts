"use strict";
/// <reference path="typings/tsd.d.ts" />
var http = require('http');
var Relogio = require('./Relogio');
var RelogioE = new Relogio();
var hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write("" + RelogioE.Hora);
    res.end('\n End of response. \n ');
});
server.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
