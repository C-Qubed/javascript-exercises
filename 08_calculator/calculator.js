const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(args) {
	return args.reduce(add, 0)
};

const multiply = function(args) {
  return args.reduce((total, current) => total * current);
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num, product = num) {
  if (num === 0) {
    return 1;
  }
  // recurse until input num is 1
  if (num === 1) {
    return product;
  }
  // when num is not 1, decrement the num
  let decrNum = num - 1;
  // update the product
  let newProduct = product * decrNum
  // pass the updated product and new num back into the factorial function
  return factorial (decrNum, newProduct)
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
