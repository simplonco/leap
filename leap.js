var YearLeap = function(year) {
    this.year = year;
    return (this.year % 4 === 0 && this.year % 100 === 0 || this.year % 400 === 0);
}

YearLeap(2000);

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
//
}

module.exports = Year;
