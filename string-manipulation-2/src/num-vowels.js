/* exported numVowels */

// create storage for output
// create storage for vowels
// look at each character in input
// - look at each vowel
//  - if current character lowercased is equal to current vowel
//    - add one to the output
// return output

function numVowels(string) {
  var vowelCount = 0;
  var vowelCheck = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < string.length; i++) {
    for (var vowel = 0; vowel < vowelCheck.length; vowel++) {
      if (string[i].toLowerCase() === vowelCheck[vowel]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}
