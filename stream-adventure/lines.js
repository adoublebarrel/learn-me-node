"use strict";

var through = require('through');
var split = require('split');
var toUpper = false;
var uppercaseTransform = through(function write (data) {
	if (toUpper) {
		this.queue(data.toString().toUpperCase() + "\n");
	} else {
		this.queue(data.toString().toLowerCase() + "\n");
	}

	toUpper = (toUpper == false);
});

process.stdin
	.pipe(split())
	.pipe(uppercaseTransform)
	.pipe(process.stdout);
