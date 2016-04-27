//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

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
int main()
{
    int annee;
    printf("Saisir une annee : ");
    scanf("%d",&annee);
        if(annee % 4 == 0 && annee % 100 != 0 || annee % 400 == 0)
        printf("%d est une annee bissextile\n", annee);
        else
        printf("%d n'est pas une annee bissextile\n", annee);
        return 0;
}
}
module.exports = Year;
