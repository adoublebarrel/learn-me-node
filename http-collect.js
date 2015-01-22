"use strict";

var bl = require("bl"),
	http = require("http"),
	url = process.argv[2];

http.get(url, function (response) {
	response.setEncoding("utf8");
	response.pipe(bl(function (err, data) {
		if (err) {
			return console.log(err);
		}

		data = data.toString();
		console.log(data.length);
		console.log(data);

	}));
});


