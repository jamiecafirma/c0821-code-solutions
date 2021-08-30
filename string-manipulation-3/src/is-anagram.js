/* exported isAnagram */

// create storage for output, set as false
// create storage for the version of the firstString argument with no spaces
// create storage for the version of the secondString argument with no spaces
// create function for removing spaces from strings
// - look at each character in the string
//  - if current character is not a space
//    - add current character to no space version
// remove spaces from firstString
// remove spaces from secondString
// look at each character in no space version of secondString argument
// - look at each character in no space version of firstString argument
//  - if current character of secondString matches current character in firstString
//    - set output to true
//    - skip to the next character
//  - otherwise, set output to false
// return output

// function isAnagram(firstString, secondString) {
//   var match = false;
//   var firstNoSpace = '';
//   var secondNoSpace = '';
//   function removeSpaces(string, output) {
//     for (var i = 0; i < string.length; i++) {
//       if (string[i] !== ' ') {
//         output += string[i];
//       }
//     }
//   }
//   removeSpaces(firstString, firstNoSpace);
//   removeSpaces(secondString, secondNoSpace);
//   for (var s = 0; s < secondNoSpace.length; s++) {
//     for (var f = 0; f < firstNoSpace.length; f++) {
//       if (firstNoSpace[f] !== secondNoSpace[s]) {
//         match = false;
//       } else {
//         match = true;
//         continue;
//       }
//     }
//   }
//   return match;
// }
