"use strict";

var through = require('through');
var upperCaseTransform = through(function write(data) {
	this.queue(data.toString().toUpperCase());
});

process.stdin
	.pipe(upperCaseTransform)
	.pipe(process.stdout);