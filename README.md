# Browsersverige cli

Display browser stats via http://browsersverige.se from the command line

## Install

Install the module with [npm](http://npmjs.com):

	npm install -g browsersverige

## Usage

Display full list

	browsersverige

Display only top 3 browsers

	browsersverige -l 3

Copy to clipboard (for pasting into other applications)

	browsersverige -l 3 | pbcopy

### Todo
- [ ] Add argument for filtering by Browser vendor
- [ ] Add tests

### Changelog
+ 0.0.1: Published

### License
Copyright (c) 2014 Urban Sanden. Licensed under the MIT license.