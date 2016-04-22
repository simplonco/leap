//my final
var YearLeap = function(year) {
    this.year = year;
    return (this.year % 4 === 0 && this.year % 100 === 0 || this.year % 400 === 0);
}

YearLeap(2000);
