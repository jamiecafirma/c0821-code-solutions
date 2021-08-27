/* exported isVowel */

// create storage for output and set as false
// create storage for vowels
// check input lowercased compared to each vowel
// - if input matches a vowel
//  - set output as true
//  - return output
// - otherwise, set output as false
// return output

function isVowel(char) {
  var vowel = false;
  var vowelCheck = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowelCheck.length; i++) {
    if (char.toLowerCase() === vowelCheck[i]) {
      vowel = true;
      return vowel;
    } else {
      vowel = false;
    }
  }
  return vowel;
}
