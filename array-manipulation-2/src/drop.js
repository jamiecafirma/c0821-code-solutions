/* exported drop */

// create storage for input
// if the length of the array is less than the count, return empty output
// look at each element in the array, starting from the count argument
// add the current element to the output
// return the output

function drop(array, count) {
  var afterDrop = [];
  if (array.length < count) {
    return afterDrop;
  }
  for (var i = count; i < array.length; i++) {
    afterDrop.push(array[i]);
  }
  return afterDrop;
}
