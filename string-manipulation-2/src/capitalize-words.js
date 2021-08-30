/* exported capitalizeWords */

// create storage for output
// create storage for current word
// create a function to capitalize a word
// - create storage for the capitalized word
// - make the first character of current word uppercase and add it to the capitalized word
// - look at the rest of the characters in current word
//   - make current character lowercase and add it to the capitalized word
// - return the capitalized word
// look at each character in input
// - if current character is a space
//  - capitalize current word
//  - add a space to the output
//  - clear current word
// - otherwise, add current character to current word
// capitalize the current word and add the result to the output
// return output

function capitalizeWords(string) {
  var output = '';
  var currentWord = '';
  function capitalizeWord(word) {
    var capitalized = '';
    capitalized += word[0].toUpperCase();
    for (var i = 1; i < word.length; i++) {
      capitalized += word[i].toLowerCase();
    }
    return capitalized;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      output += capitalizeWord(currentWord);
      output += ' ';
      currentWord = '';
    } else {
      currentWord += string[i];
    }
  }
  output += capitalizeWord(currentWord);
  return output;
}
