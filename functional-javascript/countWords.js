"use strict";

function countWords(inputWords) {
	return inputWords.reduce( function(previousValue, currentValue) {

		if (previousValue.hasOwnProperty(currentValue)) {
			previousValue[currentValue] += 1;
		} else {
			previousValue[currentValue] = 1;
		}

		return previousValue;

	}, {});

}

module.exports = countWords;