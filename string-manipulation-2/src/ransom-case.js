/* exported ransomCase */

// create storage for output
// look at each character in input
// - if index of current character is even
//  - make it lowercase and add it to the output
// - otherwise, make it uppercase and add it to the output
// return the output

function ransomCase(string) {
  var ransomLetter = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomLetter += string[i].toLowerCase();
    } else {
      ransomLetter += string[i].toUpperCase();
    }
  }
  return ransomLetter;
}
