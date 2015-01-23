"use strict";

var concat = require('concat-stream');

process.stdin
	.pipe(concat({encoding: "string"}, function (data) {
		var i = data.length-1;
		for (i; i >= 0; i--) {
			process.stdout.write(data[i]);
		}
	}));