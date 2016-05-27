/// <reference path="typings/tsd.d.ts" />
import http = require('http');
import Relogio = require('./Relogio');

var RelogioE = new Relogio();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(""+ RelogioE.Hora);
  res.end('\n End of response. \n ');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});