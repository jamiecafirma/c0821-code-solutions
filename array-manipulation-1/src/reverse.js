/* exported reverse */

// create storage for output
// look at all elements in input, starting with the last
// - add current element to output
// return output

function reverse(array) {
  var reversed = [];
  for (var i = (array.length - 1); i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}
