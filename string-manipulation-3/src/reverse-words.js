/* exported reverseWords */

// create storage for output
// create storage for current word
// create a function to reverse a word
// - create storage for the reversed word
// - look at each character in the word argument, in reverse
//  - add current character to the reversed output
// - return output
// look at each character in the string argument
// - if current character is a space
//  - reverse current word and add it and a space to the output
//  - clear current word
// - otherwise, add current character to current word
// reverse current word and add it to the output
// return output

function reverseWords(string) {
  var reversedString = '';
  var currentWord = '';
  function reverseWord(word) {
    var reversedWord = '';
    for (var r = word.length - 1; r >= 0; r--) {
      reversedWord += word[r];
    }
    return reversedWord;
  }
}
