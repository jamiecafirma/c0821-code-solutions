/* exported dropRight */

// create storage for output
// if length of array argument is less than count argument
// - return empty output
// look at each element before the index of the difference between the array length and the count
// - add current element to output
// return output

function dropRight(array, count) {
  var firstElements = [];
  if (array.length < count) {
    return firstElements;
  }
  for (var i = 0; i < array.length - count; i++) {
    firstElements.push(array[i]);
  }
  return firstElements;
}
