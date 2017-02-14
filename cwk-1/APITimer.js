const request = require('request');

var results;
var url = 'http://maps.googleapis.com/maps/api/geocode/json?address=129rectorylanelondon';
var count = 1;
var averageResponse;
var medianResponse;
var maximumResponse;
var standardDeviation;

APItimer(url, count);
processData(totalResponse, results, count);

function APItimer(url, calls) {
	results = new Array(calls, 2);
	//make the API calls, store returned data/response times in array
	for (var i = 0; i <= calls; i++) {
		var startTime = Date.now();
		request(url, function (error, response, data) {
			var endTime = Date.now();
			if (error) throw (error);
			results[i,0] = data;
			results[i,1] = endTime - startTime;
			console.log(results[i,0], '\nresponsetime: ', results[i,1]);
			totalResponse += results[i,1];
		});
	}
};

function processData (indexes, array, total) {
	averageResponse = total/indexes;
	medianResponse = 
	maximumResponse = 
	standardDeviation =
};

