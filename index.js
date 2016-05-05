#!/usr/bin/env node
var bt3 = require('./bt3.json');
var chalk = require('chalk');

var queryName = process.argv[2];
//console.log(item);

for (name in bt3) {
	// console.log(bt3[name]);
	for (item in bt3[name]) {
		//console.log(bt3[name][item]);
		if (bt3[name][item] === queryName) {
			console.log("<--")
			console.log("This class was belonged to " + chalk.green(name) )
			console.log("-->")
		}
	}
}