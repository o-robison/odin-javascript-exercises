const convertToCelsius = function(farenheit) {
  var celsius = (farenheit-32) * (5/9);
  celsius = Math.round(celsius*10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  var farenheit = (celsius*(9/5))+32;
  farenheit = Math.round(farenheit*10) / 10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
