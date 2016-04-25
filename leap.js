//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Year(year) {
  this.year = year;
}

Year.prototype.isLeap = function () {
	if ((num % 4 == 0 && num % 100 != 0) && num % 400 != 0) {
		console.log("boooooooo");
	}
}

module.exports = Year;
