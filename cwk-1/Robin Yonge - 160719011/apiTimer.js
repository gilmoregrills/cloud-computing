/*
 *Student Name: Robin Farrow-Yonge
 *Student Number: 160719011 
 *Sorry it's so verbose! I had too much fun playing with JS.
 *You can safely ignore all but the testAPI function, and I've
 *broken it down in the report anyway. 
*/

const request = require('syncrequest'); //External package from https://github.com/ForbesLindesay/sync-request by GitHub user ForbesLindesay, used here under the MIT license

var url = 'http://www.pokeapi.co/api/v2/pokemon/zapdos/'; //the API to GET from
var rateLimit = 3; //should be per 15 minutes, math possibly needed 
var requests = 5; //the number of times you want to GET

//just calls the function, safe to ignore pretty much
(function() {
	if (requests == 1) {
		console.log(testAPI(url, requests, rateLimit));
	} else {
		var results = testAPI(url, requests, rateLimit);
		console.log('Response Times: '+results.toString());
		console.log('Calculations Complete!\nThe average response time was: '+calcAverage(results)+'\nThe median response time was: '+calcMedian(results)+'\nThe max response times was: '+calcMax(results)+'\nThe standard deviation was: '+calcSD(results));
	}
}());

//the actual API testing function
function testAPI (url, requests, rateLimit) {
	if (requests > 1) {
		var count = new Array(requests).fill(0);
		var results = count.map(function() {
			var startTime = Date.now();
			var result = request.sync(url);
			var responsetime = Date.now() - startTime;
			//the below if statement checks if the responsetime is less
			//than 15 minutes/rateLimit, if it is, we wait 
			if (responsetime < 900000/rateLimit) {
				var waitTime = (900000/rateLimit)-responsetime;
				var start = Date.now();
				while (Date.now() != start+waitTime) {
				}//pretty hacky, but there isn't a nice wait() function
			}
			console.log(JSON.parse(result.body).forms[0]);
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

//functions to analyse results 
//again, just got carried away with JS

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

//replace loop w/ filter
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
		var index = time - mean;
		var squareIndex = index * index;;
		return squareIndex;
	});
	var total = squareVariance.reduce(function(total, value) {
		return total + value;
	}, 0);
	sd = Math.sqrt(total/squareVariance.length);
	return sd;	
};
