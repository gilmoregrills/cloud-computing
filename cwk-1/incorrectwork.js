const Twitter = require('twitter');

var client = new Twitter({

	access_token_key: '49080071-0RbFURQT847CaDxqUj3x9g82pVeRQhjdi9tXEWrVF',
	access_token_secret: 'c9GqWWFJMiYFdNrdcqPr52lDUJtbgoTnE6jtfxGLccipT',
	consumer_key: '4qQNR729m4rWuMYhQOlarVo45',
	consumer_secret: 'BRXYEBIOAaodY31LfffVwKv0JMD3ngT2oz0xSUaEIFV91e2mij'
});

var results = new Array(5, 3);
function timeAPI(calls) {
	for (var i = 0; i <= calls; i++) {
		var startTime = Date.now();
		client.get('/statuses/user_timeline.json?user_id=16298441&count=1', function(error, tweets, response) {
			var endTime = Date.now();
			results[i,0] = tweets[0].user.name;
        		results[i,1] = tweets[0].text;	
			results[i,2] = endTime - startTime;
			console.log(results[0], ' - ', results[1], ' | response time: ', results[2]);
		});
	}
};
timeAPI(5);
