#!/usr/bin/env node

var program = require('commander');
var request = require('request');
var chalk = require('chalk');
var out = process.stdout;

program
	.version('1.0.2')
	.usage('[options] <keywords>')
	.option('-l, --limit <n>', 'Limit results by entering a number 1-18', parseInt)
	.option('-r --filter <s>', 'Filter browser by entering a string')
	.option('-f, --full', 'Full output')
	.parse(process.argv);

	var url = 'http://browsersverige.se/browsers.json';
	var number;
	var full = false;
	var filter = null;

	// Limit
	if(program.limit) {
		number = program.limit;
	} else {
		full = true;
	}

	// Filter
	if(program.filter) {
		filter = program.filter;
	}

	request({
		method: 'GET',
		url: url
	}, function(error, response, body) {

		if (!error && response.statusCode == 200) {
			var body = JSON.parse(body);
			if(full) {
				out.write('\n'+chalk.white.bgBlue(" Browsersverige: ")+'\n');

				for(var i = 0; i < body.length; i++) {
					if(body[i]) {
						if(!filter || (filter && body[i].browser.toLowerCase().indexOf(filter.toLowerCase()) !== -1)) {
							out.write(chalk.yellow(body[i].browser) + ': '+ chalk.blue(body[i].market+' %') + "\n");
						}
					}
				}
			} else {
				out.write('\n'+chalk.white.bgBlue(" Browsersverige topp "+number+": ")+'\n');

				for(var i = 0; i < number; i++) {
					if(body[i]) {
						if(!filter || (filter && body[i].browser.toLowerCase().indexOf(filter.toLowerCase()) !== -1)) {
							out.write(chalk.yellow(body[i].browser) + ': '+ chalk.blue(body[i].market+' %') + "\n");
						} else {
							number++; // If missed filter, run loop once more
						}
					}
				}
			}
			process.exit(0);
		} else if (error) {
			out.write(chalk.red('Error: ' + error));
			process.exit(1);
		}
	});
