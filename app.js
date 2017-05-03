var express = require('express');
var app = express;
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var tweets = [
	{text: "Hello", time: new date.getTime() - 12300},
	{text: "This is it", time: new date.getTime() - 3000},
	{text: "Last tweet", time: new date.getTime() - 456},
];

app.use(express.static(__dirname + '/public'));

app.get('/ajax', function(request, response){
	response.type('json');
	response.end(JSON.stringify({tweets:tweets}))
});

app.post('/ajax', function(request, response){
	var newTweet = {text: request.body.tweet, time: new Date().getTime};
	tweet.push(newTweet);
	response.type('json');
	response.end(JSON.stringify(newTweet));
});

var server = app.listen(8080);