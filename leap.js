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
	if ( this.year % 4 == 0 && this.year % 100 != 0) && this.year % 400 != 0) {
		console.log("boooooooo");
	}
}

module.exports = Year;
