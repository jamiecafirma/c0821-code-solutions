/* exported capitalizeWords */

// create storage for output
// create storage for current word
// create a function to capitalize a word
// - make the first character of current word uppercase and add it to the output
// - look at the rest of the characters in current word
//   - make current character lowercase and add it to the output
// look at each character in input
// - if current character is a space
//  - capitalize current word
//  - add a space to the output
//  - clear current word
// - otherwise, add current character to current word
// capitalize the current word
// return output

function capitalizeWords(string) {
  var output = '';
  var currentWord = '';
  function capitalizeWord(word) {
    output += word[0].toUpperCase();
    for (var i = 1; i < word.length; i++) {
      output += word[i].toLowerCase();
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      capitalizeWord(currentWord);
      output += ' ';
      currentWord = '';
    } else {
      currentWord += string[i];
    }
  }
  capitalizeWord(currentWord);
  return output;
}
