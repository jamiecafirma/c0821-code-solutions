/* exported tail */

// create storage for output
// look at each element in the array, starting with the second element
// - add the current element to the output
// return the output

function tail(array) {
  var afterFirst = [];
  for (var i = 1; i < array.length; i++) {
    afterFirst.push(array[i]);
  }
  return afterFirst;
}
