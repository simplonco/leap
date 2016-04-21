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
Year.prototype.isLeap = function () {

  if ((year%100 && year%400) ===0)|| (year%4 ===0){
      return "leap year";
// (you have to use this.year)
//
return this.year;
}

module.exports = Year;
