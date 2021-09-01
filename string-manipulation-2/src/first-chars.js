/* exported firstChars */

// create storage for output
// if length argument is greater than length of string argument
// - return the string argument
// look at each character in input up until the length argument is reached
// - add current character to output
// return output

function firstChars(length, string) {
  var shortened = '';
  if (length > string.length) {
    return string;
  }
  for (var i = 0; i < length; i++) {
    shortened += string[i];
  }
  return shortened;
}
