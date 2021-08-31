/* exported isAnagram */

// create storage for a test if secondString reorganized is the same as firstString
// create storage for the firstString without any spaces
// look at each character in secondString
// - if current character is not a space
//  - look at each character in firstString
//    - if current character in firstString is not a space and matches current character in secondString
//      - add current character of secondString to the test if secondString is an anagram
//      - add current character of firstString to the version without any spaces
// if anagram test for secondString and the no spaces version of firstString match exactly
// - return true
// otherwise, return false

function isAnagram(firstString, secondString) {
  var reorganized = '';
  var noSpaces = '';
  for (var s = 0; s < secondString.length; s++) {
    if (secondString[s] !== ' ') {
      for (var f = 0; f < firstString.length; f++) {
        if (firstString[f] !== ' ' && firstString[f] === secondString[s]) {
          reorganized += secondString[s];
          noSpaces += firstString[f];
        }
      }
    }
  }
  if (reorganized === noSpaces) {
    return true;
  }
  return false;
}
