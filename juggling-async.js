"use strict";

var bl = require("bl"),
	http = require("http"),
	urls = process.argv.slice(2),
	responseData = [];

	for (var i = 0; i <= 2; i++) {
		// console.log(urls[i]);

		http.get(urls[i], storeResponse(i));
	};

function storeResponse (index) {

	return (function (response) {
		response.setEncoding("utf8");

		response.pipe(bl(function (err, data) {

			if (err) {
				return console.log(err);
			}

			responseData[index] = data.toString();

			if (responseData[0] && responseData[1] && responseData[2]) {
				// console.log(responseData[2]);
				responseData.forEach(function (value, index, array) {
					console.log(value);
				});
			}

		}));
	});
}

