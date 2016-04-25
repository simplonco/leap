'use strict';

function Year(year) {
  this.year = year;
}

Year.prototype.isLeap = function () {

	if ((num % 4 == 0 && num % 100 != 0) && num % 400 != 0) {
		console.log("boooooooo");
	}

}
