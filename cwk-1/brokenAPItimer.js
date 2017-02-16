const request = require('request');

var url = 'http://maps.googleapis.com/maps/api/geocode/json?address=129rectorylanelondon';
var count = 1;
var totalResponse = 0;

var results = new Array(count);

results.map(apiTimer(url, count));

printResults();
//RIGHT NOW THE PROBLEM IS THAT PRINT RESULTS IS CALLED BEFORE THERE
//ARE RESULTS TO PRINT

function printResults() {
	console.log('The results are in!');
};

//checks the current time, makes the API call
//on the callback it checks the time and calculates the response time from that
//adds responsetime to results array
function apiTimer (url, index) {
		var tmp;
		var startTime = Date.now();
		request(url, function (error, response, data) {
			var responsetime = Date.now() - startTime;
			if (error) throw (error);
			console.log(data, '\nresponsetime: ', responsetime);
			v
		});
};

