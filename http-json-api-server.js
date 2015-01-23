"use strict";

var http = require('http');
var url = require('url');
var portNum = process.argv[2];

var server = http.createServer(function (request, response) {
	var reqUrl = url.parse(request.url, true);


	if (!reqUrl.query.hasOwnProperty('iso')) {
		response.writeHead(400, { 'Content-Type': 'application/json'});
		response.end();

		return;
	}

	switch (reqUrl.pathname) {

		case "/api/parsetime":
			response.writeHead(200, { 'Content-Type': 'application/json' });			
			response.write(JSON.stringify(parseTimeToHMS(reqUrl.query.iso)));

			break;

		case "/api/unixtime":
			response.writeHead(200, { 'Content-Type': 'application/json' });
			response.write(JSON.stringify(parseTimeToUnix(reqUrl.query.iso)));

			break;

		default:
			response.writeHead(404, {'Content-Type': 'application/json'});
			break;
	}

	response.end();

});

server.listen(portNum);

function parseTimeToHMS(isoTime) {
	var date = new Date(isoTime);

	return ({ 
		hour: date.getHours(), 
		minute: date.getMinutes(),
		second: date.getSeconds() 
	});

}

function parseTimeToUnix(isoTime) {
	var date = new Date(isoTime);

	return { unixtime: date.getTime() };
}


