/* exported last */

// create storage for output
// create storage for index of last element of input, then subtract 1 from the length of the input to get the last index
// get the value of the last element using the index and add it to the output
// return output

function last(array) {
  var lastElement;
  var lastIndex = array.length - 1;
  lastElement = array[lastIndex];
  return lastElement;
}
