"use strict";

var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through');

var cipherName = process.argv[2];
var cipherPwd = process.argv[3];
var decipher = crypto.createDecipher(cipherName, cipherPwd);
var parser = tar.Parse();

// var format = through(function write (data) {
// 	cipher.update(data)
// })

parser.on('entry', function (entry) {
	if (entry.type !== 'File') {
		return;
	}
	var cipher = crypto.createHash('md5', { encoding: 'hex' });
	
	entry.pipe(cipher)
		 .pipe(through(function write (data) {
		 	this.queue(data);
		 }, function end (data) {
		 	this.queue(" " + entry.path + "\n");
		 }))
		 .pipe(process.stdout);
});
// tar.gzip.encryted > stdin

// decrypt

process.stdin
	.pipe(decipher)
	.pipe(zlib.createGunzip())
	.pipe(parser);

// for each file 
//		[hex-md5-hash-contents] [FILENAME]\n