/* exported isUpperCased */

// create storage for output and set as false
// look at each character in input
// - if current character is equal to current character capitalized
//  - set output to true
// - otherwise, set output to false
// return output

// function isUpperCased(word) {
//   var upperCase = false;
//   for (var i = 0; i < word.length; i++) {
//     if (word[i] === word[i].toUpperCase()) {
//       upperCase = true;
//     } else {
//       upperCase = false;
//     }
//   }
//   return upperCase;
// }

// create storage for output and set as true
// look at each character in input
// - if current character is not equal to current character uppercase
//  - set output to false
//  - return output
// - otherwise, set output to true
// return output

function isUpperCased(word) {
  var upperCase = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      upperCase = false;
      return upperCase;
    }
  }
  return upperCase;
}
