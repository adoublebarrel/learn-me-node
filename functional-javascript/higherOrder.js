"use strict"

function repeat(operation, num) {
	operation();

	if (num > 1) {
		num -= 1;
		repeat(operation, num);
	}
}

module.exports = repeat;