/* exported getWords */

// create storage for output
// create storage for characters in current word
// - if there are no characters in the string
//  - return output
// look at characters in input, one at a time
// - if current character is a space
//  - add current word to output
//  - clear value of current word
// - otherwise, add current character to current words
// add value of current word to output
// return output

function getWords(string) {
  var words = [];
  var currentWord = '';
  if (string === '') {
    return words;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      words.push(currentWord);
      currentWord = '';
    } else {
      currentWord += string[i];
    }
  }
  words.push(currentWord);
  return words;
}
