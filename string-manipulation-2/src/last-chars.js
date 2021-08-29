/* exported lastChars */

// create storage for output
// if length argument is greater than length of string argument
// - return the string argument
// look at each character in input starting from the length argument
// - add current character to output
// return output

function lastChars(length, string) {
  var shortened = '';
  if (length > string.length) {
    return string;
  }
  for (var i = string.length - length; i < string.length; i++) {
    shortened += string[i];
  }
  return shortened;
}
