const request = require('sync-request');

var url = 'http://maps.googleapis.com/maps/api/geocode/json?address=129rectorylanelondon';
var count = 1;
var results = [];
var totalResponse = 0;
		
testAPI(url, count);
printResults();


function printResults() {
	console.log('The results are in!\nThe average response time was: '+calcAverage()+'\nThe median response time was: '+calcMedian()+'\nThe max response times was: '+calcMax()+'\nThe standard deviation was: '+calcSD());
};

function testAPI (url, calls) {
	for (var i = 0; i < calls; i++) {
		apiTimer(url);
	}
};

function apiTimer (url, index) {
		var startTime = Date.now();
		var result = request('GET', url);
		var responsetime = Date.now() - startTime;
	//	console.log(responsetime);	
		results[results.length-1] = responsetime;
	//	console.log(results[results.length-1]);
		totalResponse += responsetime;
};

function calcAverage() {
	return totalResponse/count;
};

function calcMedian() {
	if count is even
		return mean of two middle
	if count is odd
		return middle number
};

function calcMax() {
	var tmp = 0;
	for (time in results) {
		if(time > tmp) {
			tmp = time;
		}
	}
	return tmp;
};

function calcSD() {
	var mean = calcAverage();
	for (time in results) {
		see how much they deviate from average??
	}
};
