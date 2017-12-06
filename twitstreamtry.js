console.log('the bot is starting');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var stream = T.stream('statuses/filter', { track: '#thisisaclassroom' });

stream.on('tweet', function (tweet) {
  console.log(tweet);
     postid = tweet.id_str;
     T.post('statuses/update', {in_reply_to_status_id: postid, status: 'thats dummy lit'});               
});