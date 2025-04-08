const leapYears = function(year) {
//leap year = divisible by 4
//but if divisible by 100 not leap year
//unless ALSO divisible by 400
    if (year < 100 && year % 4 === 0) {
        return true;
    } else if (year < 400 && year % 100 !== 0 && year % 4 === 0) {
        return true;
    } else if (year % 100 === 0 && year % 400 === 0 && year % 4 === 0) {
        return true;
    } else if (year % 100 !== 0 && year % 4 === 0){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
