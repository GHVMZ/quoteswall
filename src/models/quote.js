'use strict';

var mongoose = require('mongoose');

var quotesWall = new mongoose.Schema({
	text: String,
	author: String,
	heart: {type: Number, default: '0'}
},{ timestamps: true });

var model = mongoose.model('Quote', quotesWall);

module.exports = model;
