"use strict";

var argvLength = process.argv.length,
	sum = 0;

for (var i = argvLength - 1; i >= 2; i--) {
	sum += Number(process.argv[i]);
};

console.log(sum);