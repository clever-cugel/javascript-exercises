const reverseString = function(enterString) {
    let reverseString = '';
    for (let i = enterString.length - 1; i >= 0; i--) {
        reverseString += enterString[i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
