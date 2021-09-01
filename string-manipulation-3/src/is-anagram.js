/* exported isAnagram */

// look at each character in the first string
// if the current character is a space, skip it
// look at each character in the second string
// if the current character is a space, skip it
// if the character in the first string can be found in the second string, remove the character from each word
// if the character is not found in second string at all, return false

function isAnagram(firstString, secondString) {
  var first = [];
  var second = [];
  var firstNoSpace = [];
  var secondNoSpace = [];
  var firstTest = '';
  var secondTest = '';
  first = firstString.split('');
  second = secondString.split('');
  function noSpaces(word) {
    var output = [];
    for (var i = 0; i < word.length; i++) {
      if (word[i] !== ' ') {
        output.push(word[i]);
      }
    }
    return output;
  }
  firstNoSpace = noSpaces(first);
  secondNoSpace = noSpaces(second);
  firstNoSpace.sort();
  secondNoSpace.sort();
  function makeString(array) {
    var output = '';
    for (var i = 0; i < array.length; i++) {
      output += array[i];
    }
    return output;
  }

  firstTest = makeString(firstNoSpace);
  secondTest = makeString(secondNoSpace);

  if (firstTest === secondTest) {
    return true;
  }
  return false;
}
