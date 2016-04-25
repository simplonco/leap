'use strict';

/**
 * Represents a year to check whether is leap or not
 *
 * @param  {number} year
 * Numeric year.
 */
function Year(year) {
  this.year = year;

}

/**
 * Whether given year is a leap year.
 *
 * @return {boolean}
 * Whether given year is a leap year.
 */
var Year = function (year) {
	
  this.year = year;

}
Year.prototype.isLeap = function (year) {
	 if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
	 	return "leap year";
	 } else {
	 	return false;
	 }
}

// begin test code
var test = new Year();
console.log(test.isLeap(1500));

var test2 = new Year();
console.log(test2.isLeap(2015));

var test2 = new Year();
console.log(test2.isLeap(2016));

var test2 = new Year();
console.log(test2.isLeap(1900));

var test2 = new Year();
console.log(test2.isLeap(1992));

var test2 = new Year();
console.log(test2.isLeap(1978));

var test2 = new Year();
console.log(test2.isLeap(2100));

var test2 = new Year();
console.log(test2.isLeap(2400));
// end test code
