#!/usr/bin/env node
var bt3 = require('./bt3.json');
var chalk = require('chalk');

var queryName = process.argv[2];

if (queryName === undefined){
	console.log(chalk.gray("Pleae input class name!"))
} else {
	var check = false;
	for (name in bt3) {
		// console.log(bt3[name]);
		for (item in bt3[name]) {
			//console.log(bt3[name][item]);
			if (bt3[name][item] === queryName) {
				console.log("This class was belonged to " + chalk.green(name)+".");
				var check = true;
			}

		}
	}
	if ( check === false ){
		console.log(chalk.red("Oops.. this class was not in!"));
	}
}
