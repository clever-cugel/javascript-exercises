const palindromes = function (str) {
    str = str.split('');
    str = str.filter((n) => n != '!' && n != ' ' && n != '.' && n != ',' && n != ';' && n != ':' && n != '?' && n != '-' && n != '_' && n != '/' && n != "'" && n != '&' && n != '*' && n != '\\');
    str = str.join('');

    let midex;
    let leftHalf;
    let rightHalf;

    if (str.length % 2 === 0) {
        midex = str.length / 2;
        leftHalf = str.slice(0, midex);
        rightHalf = str.slice(midex, str.length)
    } else {
        midex = Math.floor(str.length / 2);
        leftHalf = str.slice(0, midex + 1);
        rightHalf = str.slice(midex, str.length);
    }
    rightHalf = rightHalf.split('');
    rightHalf = rightHalf.reverse();
    rightHalf = rightHalf.join('');
    
    if (leftHalf.toLowerCase() === rightHalf.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};



// Do not edit below this line
module.exports = palindromes;
