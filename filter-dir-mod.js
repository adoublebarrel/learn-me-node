"use strict";

module.exports = function (pathSpec, extension, callback) {
	var fs = require('fs'),
		path = require('path'),
		extension = "." + extension;

	fs.readdir(pathSpec, readdirCallback);

	function readdirCallback (err, files) {

		if (err) {
			callback(err, []);
			return;
		}

		callback(null, files.filter(filterFiles));
	}

	function filterFiles(value, index, list) {

		if (path.extname(value) === extension) {
			return true;
		}

		return false;
	}
}