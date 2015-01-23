"use strict";

var through = require('through');
var upperCaseTransofrm = through(function write(data) {
	this.queue(data.toString().toUpperCase());
});

process.stdin
	.pipe(upperCaseTransofrm)
	.pipe(process.stdout);