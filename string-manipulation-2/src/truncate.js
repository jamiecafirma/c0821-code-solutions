/* exported truncate */

// create storage for output
// if length argument is less than length of string argument
// - look at each character in input up until the length argument is reached
//  - add current character to output
// otherwise, add string to output
// add an ellipsis to output
// return output

function truncate(length, string) {
  var shortened = '';
  if (length < string.length) {
    for (var i = 0; i < length; i++) {
      shortened += string[i];
    }
  } else {
    shortened = string;
  }
  shortened += '...';
  return shortened;
}
