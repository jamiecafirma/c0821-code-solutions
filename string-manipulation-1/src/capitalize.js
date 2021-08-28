/* exported capitalize */

// create storage for the output
// separate first character from input, capitalize it, then add it to the output
// look at each character after the first, one at a time
// - add current character to output
// return output

function capitalize(word) {
  var capitalizedWord = '';
  capitalizedWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    capitalizedWord += word[i].toLowerCase();
  }
  return capitalizedWord;
}
