"use strict";

var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');

module.exports = function () {
	var genres = [];

	return combine(
		split(),
		through(writeGenres, endGenres),
		zlib.createGzip()
	);

	function writeGenres (data) {
		if (!data) {
			return;
		}

		var jsonData = JSON.parse(data);

		if (jsonData.type === 'genre') {
			// console.log('push genre: ' + jsonData.name);
			genres.unshift({ name: jsonData.name, books: [] });

			if (genres.length > 1) {
				this.queue(JSON.stringify(genres.pop())+"\n");
			}
			return;
		} else {
			genres[0].books.push(jsonData.name);

			return;
		}

	}

	function endGenres() {
		this.queue(JSON.stringify(genres.pop())+"\n");
		this.queue(null);
	}
}