/* exported capitalize */

// create storage for the output
// create storage for the first character
// create storage for the rest of the input
// separate first character from input then add first character of the input to the storage for it
// capitalize the first character
// look at each character after the first, one at a time
// - add current character to storage for the rest of the characters
// add capitalized first character and rest of characters together and put in storage for ouyput
// return output

function capitalize(word) {
  var capitalizedWord = '';
  var firstChar = '';
  var otherChar = '';
  firstChar += word[0];
  firstChar = firstChar.toUpperCase();
  for (var i = 1; i < word.length; i++) {
    otherChar += word[i].toLowerCase();
  }
  capitalizedWord += firstChar + otherChar;
  return capitalizedWord;
}
