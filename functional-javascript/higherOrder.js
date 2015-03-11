function repeat(operation, num) {
	"use strict";
	operation();

	if (num > 1) {
		num -= 1;
		repeat(operation, num);
	}
}

module.exports = repeat;
