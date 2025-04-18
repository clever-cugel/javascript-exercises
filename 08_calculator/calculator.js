const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, nextItem) => {
    return total += nextItem;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, nextItem) => {
    return total *= nextItem;
  },1);
};

const power = function(a, b) {
  let total = a;
	for (let i = 1; i < b; i++) {
    total *= a;
  }
  return total;
  //there is apparently a Math.pow method I could have just used
};

const factorial = function(num) {
  let total = num;
  if (num === 0) {
    return 1;
  } else {
    for (let i = num - 1; i > 0; i--) {
      total *= i;
    }
    return total;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
