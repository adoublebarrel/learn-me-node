"use strict";

var filterDir = require("./filter-dir-mod.js"),
	filePath = process.argv[2],
	extension = process.argv[3];

filterDir(filePath, extension, filterDirCallback);

function filterDirCallback (err, files) {
	if (err) {
		console.log("There was an error " + err);
		return;
	}

	console.log(files.join("\n"));
}