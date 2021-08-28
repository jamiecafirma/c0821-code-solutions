/* exported last */

// create storage for output
// create storage for index of last element of input
// subtract 1 from the length of the input and add it to the index storage
// get the value of the last element using the index and add it to the output
// return output

function last(array) {
  var lastElement;
  var lastIndex = 0;
  lastIndex += array.length - 1;
  lastElement = array[lastIndex];
  return lastElement;
}
