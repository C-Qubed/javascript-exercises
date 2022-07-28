const reverseString = function(string) {
  // check if string is empty
  if (string.length === 0) {
    return ''
  }
  // split string into individual letters in an array
  const splitString = string.split('')
  // use reverse method to reverse order of letters
  const reverseArray = splitString.reverse()
  // use join method to rejoin elements into string
  const reverseString = reverseArray.join('')
  // return reversed string
  return reverseString
};

console.log(reverseString(''))

// Do not edit below this line
module.exports = reverseString;
