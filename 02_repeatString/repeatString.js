const repeatString = function(string, repeatCount) {
  let result = ''
  if (repeatCount < 0) {
    return 'ERROR'
  }
  while (repeatCount > 0) {
    repeatCount--
    result += string      
  }
  return result
};

// Do not edit below this line
module.exports = repeatString;
