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
//
// YOUR CODE GOES HERE
// (you have to use this.year)
//{      
  this.number = number;    
    return isDivisibleBy(400) || ( isDivisibleBy(4) && !isDivisibleBy(100));
  }
  function isDivisibleBy(a_number) {
    return this.number % a_number == 0
  }        
  return isLeap();
}

}

module.exports = Year;

