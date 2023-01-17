const convertToCelsius = function(F) {
  let celsius = ((F-32) * 5/9);
  let rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(C) {
  let fahrenheit = ((C*9/5) + 32);
  let fRounded = Math.round(fahrenheit * 10) / 10;
  return fRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
