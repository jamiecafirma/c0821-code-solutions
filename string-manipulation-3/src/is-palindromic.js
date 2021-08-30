/* exported isPalindromic */

// create storage for reversed version of string argument
// create storage for the version of the string argument with no spaces
// look at each character in the string, in reverse
// - if current character is not a space
//  - add current character to reversed version
// look at each character in the string
// - if current character is not a space
//  - add current character to no spaces version
// look at each character in the no spaces version of the string
// - if current character is not equal to the character at the same index in the reversed version
//  - return false
// return true

function isPalindromic(string) {
  var reversed = '';
  var noSpaces = '';
  for (var reverse = string.length - 1; reverse >= 0; reverse--) {
    if (string[reverse] !== ' ') {
      reversed += string[reverse];
    }
  }
  for (var n = 0; n < string.length; n++) {
    if (string[n] !== ' ') {
      noSpaces += string[n];
    }
  }
  for (var i = 0; i < noSpaces.length; i++) {
    if (noSpaces[i] !== reversed[i]) {
      return false;
    }
  }
  return true;
}
