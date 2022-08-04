const palindromes = function (word) {
    // remove non-letters and spaces from word
    let removedSpaces = word.replace(/ /g, "");
    let inputWord = removedSpaces.replace(/[^a-zA-Z ]/g, "").toLowerCase();
    console.log(inputWord)
    //split the word into an array
    let reverseWordArr = inputWord.split("");
    // reverse the array
    let reverseArray = reverseWordArr.reverse();
    // rejoin the array elements into a string
    let reversedWord = reverseArray.join("");
  	
    // return t/f comparing input word to reverse word
    return inputWord === reversedWord;
}
// Do not edit below this line
module.exports = palindromes;
