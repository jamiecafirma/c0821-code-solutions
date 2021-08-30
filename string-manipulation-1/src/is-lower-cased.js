/* exported isLowerCased */

// create storage for output and set as false
// look at each character in input
// - if current character is not equal to current character lowercase
//  - set output to false
//  - return output
// - otherwise, set output to true
// return output

function isLowerCased(word) {
  var lowerCase = false;
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      lowerCase = false;
      return lowerCase;
    } else {
      lowerCase = true;
    }
  }
  return lowerCase;
}
