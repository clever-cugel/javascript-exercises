const findTheOldest = function(arr) {
    let yearsA;
    let yearsB;
    let today = 2025;

    let yearOrder = arr.sort((personA, personB) => {
        if (!(personA.yearOfDeath)) {
            yearsA = today - personA.yearOfBirth;
        } else {
            yearsA = personA.yearOfDeath - personA.yearOfBirth;
        }

        if (!(personB.yearOfDeath)) {
            yearsB = today - personB.yearOfBirth;
        } else {
            yearsB = personB.yearOfDeath - personB.yearOfBirth;
        }

        if (yearsA > yearsB) {
            return -1;
        } else {
            return 1;
        }
    });
    
    return yearOrder[0];
};

// Do not edit below this line
module.exports = findTheOldest;
