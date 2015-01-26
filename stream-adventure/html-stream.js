"use strict";

var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

var loudStream = tr.select('.loud').createStream();
var upperCaseTransform = through(function write (data) {
	this.queue(data.toString().toUpperCase());
});

loudStream.pipe(upperCaseTransform).pipe(loudStream);

process.stdin.pipe(tr).pipe(process.stdout);

