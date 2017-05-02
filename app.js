var express = require('express');
var app = express;
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var tweets = [
	{text: "Hello", time: new date.getTime() - 12300},
	{text: "This is it", time: new date.getTime() - 3000},
	{text: "Last tweet", time: new date.getTime() - 456},
];

