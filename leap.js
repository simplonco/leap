
var Year = function(year) {
  this.year = year;
}

Year.prototype.isLeap = function (year) {
	if ( (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
		return true;
	}
	else { return false;}
}
var test = new Year();
console.log (test.isLeap(2000));

var test2 = new Year();
console.log (test.isLeap(4500));

