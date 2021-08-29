/* exported includes */

// if array argument is empty
// return false
// look at each element in the array argument
// - if current element is equal to value argument
//  - return true
// otherwise, return false

function includes(array, value) {
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
