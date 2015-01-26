"use strict";

var spawn = require('child_process').spawn;
var duplex = require('duplexer');

module.exports = function (cmd, args) {
	child = spawn(cmd,args);

	return(duplex(child.stdin, child.stdout));
}