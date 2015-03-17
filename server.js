var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/');
// var router = require('routes')();
var path = require('path');

var server = http.createServer(function (req, res) {
  ecstatic(req, res)
});

server.listen(80);
