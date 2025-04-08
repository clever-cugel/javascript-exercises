const repeatString = function(line, num) {
    newline = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++){
        newline += line;
    }
    return newline;
};

// Do not edit below this line
module.exports = repeatString;
