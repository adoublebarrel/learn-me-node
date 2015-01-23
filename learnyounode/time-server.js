"use strict";

var net = require('net');
var portNum = process.argv[2];
var server = net.createServer(function (socket) {
	var todaysDate = [],
		todaysTime = [],
		date = new Date();

	todaysDate.push(date.getFullYear());
	todaysDate.push(padSingleDigit(date.getMonth() + 1));
	todaysDate.push(padSingleDigit(date.getDate()));

	todaysTime.push(padSingleDigit(date.getHours()));
	todaysTime.push(padSingleDigit(date.getMinutes()));


	socket.end(todaysDate.join("-") + " " + todaysTime.join(":"));
});

server.listen(portNum);

function padSingleDigit(digit) {
	if (digit < 10) {
		return digit = "0" + digit;
	} 

	return digit.toString();
}
