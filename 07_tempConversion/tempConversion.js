const ftoc = function(temp) {
  let num = ((temp - 32) * 5 / 9)
  let roundedNum = Math.round(num * 10) / 10
  return roundedNum
};

const ctof = function(temp) {
  let num = ((temp * 1.8) + 32)
  let roundedNum = Math.round(num * 10) / 10
  return roundedNum
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
