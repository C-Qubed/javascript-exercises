const sumAll = function(start, stop) {
  // input: start and stop nums
  // output: sum of start, stop, and all numbers inbetween
  // store sum in result
  
  console.log(typeof(start))
  let result = 0;
  let num1 = start;
  let num2 = stop;
  // check for negative numbers, return error
  if (start < 0 || stop < 0) {
    return 'ERROR'
  }
  if (typeof(start) != 'number' || typeof(stop) != 'number') {
    return 'ERROR'
  }
  // check if start is bigger than stop -- if it is reverse num1 and num2
  if (start > stop) {
    num1 = stop
    num2 = start
  }
  // using a for loop, iterate through numbers between start and stop
  for (let i = num1; i <= num2; i++) {
    // in each iteration, add the current num to sum
    result += i
  }
  return result
};

console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
