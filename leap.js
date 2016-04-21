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


  function this.year
  {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }


}

module.exports = Year;
