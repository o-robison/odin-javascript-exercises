const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let result = 0;
  for (number of numbers) {
    result += number;
  }
  return result;
};

const multiply = function(numbers) {
  let result = numbers[0];
  for (let i=1; i<numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if (a===0) return 1;
  var result = a;
  for (var i=a-1; i>0; i--) {
    result *= i;
  }
  return result;
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
