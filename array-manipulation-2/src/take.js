/* exported take */

// create storage for output
// if the length of the array argument is less than the input, return the array
// look at each element in input, until the specified count
// add current element to output
// return output

function take(array, count) {
  var firstElements = [];
  if (array.length < count) {
    return array;
  }
  for (var i = 0; i < count; i++) {
    firstElements.push(array[i]);
  }
  return firstElements;
}
