"use strict";

var http = require('http');
var through = require('through');
var portNum = process.argv[2];
var uppercaseTransform = through(function (data) {
	this.queue(data.toString().toUpperCase());
});

var server = http.createServer(function (request, response) {
	if (request.method === "POST") {
		request.pipe(uppercaseTransform).pipe(response);
	}

	response.end();
});

server.listen(portNum);