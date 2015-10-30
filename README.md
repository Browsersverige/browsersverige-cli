# Browsersverige cli

Node module for displaying browser stats via http://browsersverige.se from the command line.

![Screenshot](https://dl.dropboxusercontent.com/u/1162759/dump_2014-12-30_12-01-11.png)

## Install

Install the module with [npm](http://npmjs.com):

	npm install -g browsersverige-cli

## Usage

Display full list

	browsersverige

Display only top 3 browsers

	browsersverige -l 3

Filter by vendor, ex show only Internet Explorer

	browsersverige -r explorer

Help?

	browsersverige -h

Copy to clipboard (for pasting into other applications)

	browsersverige -l 3 | pbcopy

### Notes

This is just one way of measuring Browser stats. This is explained [here](http://browsersverige.se/om).

### Todo
- [ ] Add tests

### Changelog
+ 1.1.0: Added filtering by browser vendor
+ 1.0.1: Added percentage characters in the output
+ 1.0.0: No longer beta
+ 0.0.1: Published

### License
Copyright (c) 2015 Urban Sanden. Licensed under the MIT license.