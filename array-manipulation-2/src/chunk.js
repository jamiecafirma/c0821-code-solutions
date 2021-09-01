/* exported chunk */

// create storage for output
// create storage for current array
// if length of array argument is less than size argument
// - return array
// look at each element in array
// - if length of current array is equal to size
//  - add current array to output
//  - clear current array
//  - add current element to current array
// - otherwise, add current element to current array
// add current array to output
// return output

function chunk(array, size) {
  var arrays = [];
  var currentArray = [];
  if (array.length < size) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    if (currentArray.length === size) {
      arrays.push(currentArray);
      currentArray = [];
      currentArray.push(array[i]);
    } else {
      currentArray.push(array[i]);
    }
  }
  arrays.push(currentArray);
  return arrays;
}
