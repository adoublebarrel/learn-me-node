"use strict";

var fs = require('fs'),
	filepath = process.argv[2],
	file = fs.readFileSync(filepath),
	numLines;

numLines = file.toString().split("\n").length - 1;

console.log(numLines);
