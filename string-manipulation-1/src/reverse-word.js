/* exported reverseWord */

// create storage for output
// look at each character in input, starting at the end
// - add current character to output
// return output

function reverseWord(word) {
  var reversed = '';
  for (var i = (word.length - 1); i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
