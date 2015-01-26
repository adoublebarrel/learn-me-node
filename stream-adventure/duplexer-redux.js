"use strict";

var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
	var countries = {};
	var writeCountries = through(function write (data) {
		if (countries.hasOwnProperty(data.country)) {

			countries[data.country]++;
		} else {
			countries[data.country] = 1;
		}
	},function end() {
		counter.setCounts(countries);
	});

	return duplexer(writeCountries, counter);
}