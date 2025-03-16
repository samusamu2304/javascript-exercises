const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(numbers) {
	return numbers.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((acc, cur) => acc * cur, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number) {
  let acc = 1;
	for (let i = 1; i <= number; i++) {
      acc = acc * i;
    }
    return acc;
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
