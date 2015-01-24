"use strict";

var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

var playLoud = tr.select('.loud').createStream();
var upperCaseTransform = through(function write (data) {
	this.queue(data.toString().toUpperCase());
});

playLoud.pipe(upperCaseTransform).pipe(playLoud);

process.stdin.pipe(tr).pipe(process.stdout);

