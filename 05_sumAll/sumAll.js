const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR';
    }

    if (num1 - Math.floor(num1) != 0 || num2 - Math.floor(num2) != 0) {
        return 'ERROR';
    }
    
    let sum = 0;
    let i = 0;
    let j = 0;
    let total = 0;
    if (num1 < num2) {
        i = num1;
        j = num2;
    } else {
        i = num2;
        j = num1;
    }
    for (i; i <= j; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
