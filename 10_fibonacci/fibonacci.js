const fibonacci = function(num) {
    let first = 0;
    let second = 1;
    let memory = 0;
    
    if (typeof num === 'string') {
        num = +num;
    }

    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else if (num < 0) {
        return 'OOPS';
    } else {
        for (let i = 1; i < num; i++) {
            memory = second;
            second = second + first;
            first = memory;
        }
        return second;
    }
};

// Do not edit below this line
module.exports = fibonacci;
