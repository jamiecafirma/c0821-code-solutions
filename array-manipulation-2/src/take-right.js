/* exported takeRight */

// create storage for output
// if length of array argument is less than count argument
// - return the array
// look at each element in the array, starting from the index of the difference between the array length and the count argument
// - add current element to output
// return output

function takeRight(array, count) {
  var lastElements = [];
  if (array.length < count) {
    return array;
  }
  for (var i = array.length - count; i < array.length; i++) {
    lastElements.push(array[i]);
  }
  return lastElements;
}
