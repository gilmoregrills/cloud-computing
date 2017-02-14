const request = require('request');

var results;
var url = 'http://maps.googleapis.com/maps/api/geocode/json?address=129rectorylanelondon';
var count = 1;
var totalResponse = 0;
var averageResponse = calcAverage();
var medianResponse = calcMedian();
var maximumResponse = calcMax();
var standardDeviation = calcSD();

APItimer(url, count);

//at the moment this prints before the results of the function below, need to use callbacks to execute when APItimer completes
function printResults() {
	console.log('The results are in!\nThe average response time was: '+averageResponse+'\nThe median response time was: '+medianResponse+'\nThe max response times was: '+maximumResponse+'\nThe standard deviation was: '+standardDeviation);
};

//takes a url string, and the number of times you want to make the request
//then populates the results table while keeping track of the total response time
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
	printResults();
};

function calcAverage() {
	totalResponse/count;
};

function calcMedian() {

};

function calcMax() {

};

function calcSD() {

};
