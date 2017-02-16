const request = require('syncrequest');

var url = 'http://www.pokeapi.co/api/v2/pokemon/zapdos/'; //the API to GET from
var calls = 10; //the number of times you want to GET
var count = new Array(calls).fill(0);

//returns array named results containing the response time of each request
var results = count.map(function() {
		var startTime = Date.now();
		var result = request.sync(url);
		var responsetime = Date.now() - startTime;
		//for debugging: console.log(JSON.parse(result.body).forms[0]);
		return responsetime;
});

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

//for debugging, prints response times array/averages etc
//it's only an IIFE because it used to have other statements in
(function() {
	console.log('Response Times: '+results.toString());
	console.log('Calculations Complete!\nThe average response time was: '+calcAverage()+'\nThe median response time was: '+calcMedian()+'\nThe max response times was: '+calcMax()+'\nThe standard deviation was: '+calcSD());
}());

function calcAverage() {
	var total = results.reduce(function(total, value) {
		return total + value;
	}, 0);
	return total/results.length;
};

function calcMedian() {
	if(results.length%2 == 0) {
		return ((results[(results.length/2)] + results[(results.length/2)+1]) /2);
	} else {
		return (results[Math.round(results.length/2)-1]);
	}
};

function calcMax() {
	var tmp = 0;
	for (var i = 0; i < results.length; i++) {
		if(results[i] > tmp) {
			tmp = results[i];
		}
	}
	return tmp;
};

function calcSD() {
	var mean = calcAverage();
	var squareVariance = results.map(function(result){
		var index = result - mean;
		var squareIndex = index * index;
		return squareIndex;
	});
	var total = squareVariance.reduce(function(total, value) {
		return total + value;
	}, 0);
	sd = Math.sqrt(total/results.length);
	return sd;	
};
