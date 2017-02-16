const request = require('syncrequest');

var url = 'http://www.pokeapi.co/api/v2/pokemon/zapdos/'; //the API to GET from
var rateLimit = 300;
var requests = 7; //the number of times you want to GET


//takes as input the specified url, number of requests you want made, plus limit
//main conditional checks whether you want to test 1 response or >1
//if many, checks if requests > limit, if yes sets requests to limit-1
//returns array of results if many, single int if not
function testAPI (url, requests, limit) {
	if (requests > 1) {
		requests = requests>limit ? limit-1 : requests;
		var count = new Array(requests).fill(0);
		var results = count.map(function() {
			var startTime = Date.now();
			var result = request.sync(url);
			var responsetime = Date.now() - startTime;
			//for debugging: console.log(JSON.parse(result.body).forms[0]);
			return responsetime;
		});
		return results;
	} else {
		var startTime = Date.now();
		var result = request.sync(url);
		var responsetime = Date.now() - startTime;
		return responsetime;
	}
};

/*
asynchronous (broken) alternative
var results = count.map(function (url) {
		var startTime = Date.now();
		request(url, function (error, response, data) {
			var responsetime = Date.now() - startTime;
			if (error) throw (error);
			console.log('responsetime: ', responsetime);
		});
});
*/

//IIFE saves one line of function call!
//potentially redundant conditional, if 1 just prints the response time
//if calls >1 gets array of response times and prints averages etc
(function() {
	if (requests == 1) {
		console.log(testAPI(url, requests, rateLimit));
	} else {
		var results = testAPI(url, requests, rateLimit);
		console.log('Response Times: '+results.toString());
		console.log('Calculations Complete!\nThe average response time was: '+calcAverage(results)+'\nThe median response time was: '+calcMedian(results)+'\nThe max response times was: '+calcMax(results)+'\nThe standard deviation was: '+calcSD(results));
	}
}());

function calcAverage(arr) {
	var total = arr.reduce(function(total, value) {
		return total + value;
	}, 0);
	return total/arr.length;
};

function calcMedian(arr) {
	if(arr.length%2 == 0) {
		return ((arr[(arr.length/2)] + arr[(arr.length/2)+1]) /2);
	} else {
		return (arr[Math.round(arr.length/2)-1]);
	}
};

//replace loop w/ filter potentially
function calcMax(arr) {
	var tmp = 0;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] > tmp) {
			tmp = arr[i];
		}
	}
	return tmp;
};

function calcSD(arr) {
	var mean = calcAverage(arr);
	var squareVariance = arr.map(function(time){
		var index = arr - mean;
		var squareIndex = time * time;
		return squareIndex;
	});
	var total = squareVariance.reduce(function(total, value) {
		return total + value;
	}, 0);
	sd = Math.sqrt(total/squareVariance.length);
	return sd;	
};
