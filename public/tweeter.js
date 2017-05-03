// AJAX request for GETTING data
$.ajax({
	type: 'GET',
	url: '/ajax',
	success: function (data){
		for(var x = 0; x < data.tweets.length; x++){
			appendNewTweet(data.tweets[x]);
		}
	}
});

//function decloration for posting a new tweet
function appendNewTweet(tweet){
	var newTweet = "<div class='tweet-container'>" 
	+ "<div class='tweet-time'>" + new Date(tweet.time).toLocaleString() +
	"<div class='tweet-body'>" + tweet.text + "</div>" + "</div>";

	$('#tweet-dest').prepend(newTweet); 
}

//
$('#tweet').click(function(){
	$.ajax({
		type: 'POST',
		url: '/ajax',
		contentType: 'application/json',
		data: JSON.stringify({tweet: $('new-tweet').val()}),
		success: function(data){
			appendNewTweet(data);
			$('#new-tweet').val('');
		}
	})
});