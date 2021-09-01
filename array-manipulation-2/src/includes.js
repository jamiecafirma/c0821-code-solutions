/* exported includes */

// look at each element in the array argument
// - if current element is equal to value argument
//  - return true
// otherwise, return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
