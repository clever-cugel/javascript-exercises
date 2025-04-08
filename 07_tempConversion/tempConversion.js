const convertToCelsius = function(temp) {
  let c = 0;
  c = (temp - 32) * (5/9);
  return Math.round(c * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let f = 0;
  f = (temp * (9/5)) + 32;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
