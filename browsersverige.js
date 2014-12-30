#!/usr/bin/env node

var program = require('commander');
var request = require('request');
var chalk = require('chalk');

program
	.version('0.0.1')
	.usage('[options] <keywords>')
	.option('-l, --limit <n>', 'Limit results by entering a number 1-18', parseInt)
	.option('-f, --full', 'Full output')
	.parse(process.argv);

	var url = 'http://browsersverige.se/browsers.json';
	var number;
	var full = false;

	if(program.limit) {
		number = program.limit;
	} else {
		full = true;
	}

	request({
		method: 'GET',
		url: url
	}, function(error, response, body) {

		if (!error && response.statusCode == 200) {
			var body = JSON.parse(body);
			if(full) {
				console.log('\n'+chalk.white.bgBlue(" Browsersverige: ")+'\n');
				for(var i = 0; i < body.length; i++) {
					console.log(chalk.yellow(body[i].browser) + ': '+ chalk.blue(body[i].market));
				}
			} else {
				console.log('\n'+chalk.white.bgBlue(" Browsersverige topp "+number+": ")+'\n');
				for(var i = 0; i < number; i++) {
					console.log(chalk.yellow(body[i].browser) + ': '+ chalk.blue(body[i].market));
				}
			}
			process.exit(0);
		} else if (error) {
			console.log(chalk.red('Error: ' + error));
			process.exit(1);
		}
	});
