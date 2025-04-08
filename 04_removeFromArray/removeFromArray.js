const removeFromArray = function(removeArray, ...nums) {
    let flag = 0;
    let newArray = [];
    for (const entry of removeArray) {
        for (const subentry of nums) {
            if (entry === subentry) {
                flag = 1;
            }
        }
        if (flag === 0) {
            newArray.push(entry);
        }
        flag = 0;
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
