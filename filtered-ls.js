"use strict";

var fs = require('fs'),
	path = require('path'),
	filepath = process.argv[2],
	extension = "." + process.argv[3];

fs.readdir(filepath, readdirCallback)

function readdirCallback (err, files) {

	if (err) {
		console.log("There was an error: " + err);
		return;
	}

	console.log(files.filter(filterFiles).join("\n"));
}

function filterFiles(value, index, list) {

	if (path.extname(value) === extension) {
		return true;
	}

	return false;
}