"use strict";

// My solution
function reduce(arr, fn, initial) {
	var head,
		tail;

	if (arr.length === 0) {
		return initial;
	}

	head = arr[0];
	head = fn(initial, head, 0, arr);
	tail = arr.slice(1);

	return reduce(tail, fn, head);
}

// Better solution
function superiorReduce(arr, fn, initial) {
	return (function reduceOne(index, value) {
		if (index > arr.length - 1) return value // end condition
		return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
	})(0, initial) // IIFE. kick off recursion with initial values
}
module.exports = reduce;