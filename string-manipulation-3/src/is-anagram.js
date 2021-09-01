/* exported isAnagram */

// create storage for the first and second string in array form
// create storage for the first and second arrays with no spaces
// create storage for the arrays to be converted back to string form
// separate each character in the string and put them in a list
// create a function to remove the spaces from these lists
// - create storage for the output
// - look at each character in the word
//  - if the current character is not a space
//    - add the current character to the output
// - return the storage
// remove the spaces from both the first and second lists
// sort the first and second lists by alphabetical order
// create a function to convert the list back into one word
// - create an output
// - look at each character in the list
//  - add the current character to the output
// - return the output
// convert the lists back into words
// if the first word matches the second word exactly
// - return true
// otherwise, return false

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
