"use strict";

var http = require('http');
var fs = require('fs');
var portNum = process.argv[2];
var pathSpec = process.argv[3];

var server = http.createServer(function (request, response) {
	var src = fs.createReadStream(pathSpec);
	src.pipe(response);
});

server.listen(portNum);