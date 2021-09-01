/* exported swapChars */

// create storage for output
// look at each character in string argument
// - if current character's index is equal to firstIndex argument
//  - add value of string argument at secondIndex to output
// - if current character's index is equal to secondIndex argument
//  - add value of string argument at firstIndex to output
// otherwise, add current character to output
// return output

function swapChars(firstIndex, secondIndex, string) {
  var swapped = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapped += string[secondIndex];
    } else if (i === secondIndex) {
      swapped += string[firstIndex];
    } else {
      swapped += string[i];
    }
  }
  return swapped;
}
