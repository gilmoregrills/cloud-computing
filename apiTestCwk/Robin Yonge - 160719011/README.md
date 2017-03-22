#Cloud Computing - Coursework 1

Student Name: Robin Farrow-Yonge
Student Number: 160719011

I'm sure this is obvious, but I wanted to play it safe but adding a couple notes on running the files.

#apiTimer

Alas, JavaScript comes with little in the way of batteries, so I've had to include a small external module. 

Either: 
	Just run the apiTimer.js file from the same directory as the node_modules folder.
	Or, ensure you have both apiTimer.js and package.json in the folder and run "npm install" to get 'em. 

Then just enter "node apiTimer.js" to execute. 

To change the API url, rate limit, or number of requests to make, just modify the variables at the top of the file. 

#instTimer

As usual, chmod to make it runnable, execute with ./instTimer.sh
