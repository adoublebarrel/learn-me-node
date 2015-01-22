"use strict";

var fs = require('fs'),
	filepath = process.argv[2];

fs.readFile(filepath, 'utf8', countNewLines)

function countNewLines (err, data) {

	if (err) {
		console.log("There was an errore: " + err);
		return;
	}

	console.log(data.split("\n").length - 1);
}