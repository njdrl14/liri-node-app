var twitKeys = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');

if(process.argv[2] == "my tweets"){
	var account = Twitter({
		consumer_key: keys.twitterKeys.consumer_key,
		consumer_secret: keys.twitterKeys.Consumer_secret,
		access_token_key: keys.twitterKeys.access_token_key,
		access_token_secret: keys.twitterKeys.access_token_secret
	});
	