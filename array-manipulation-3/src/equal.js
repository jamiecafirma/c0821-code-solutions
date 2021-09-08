/* exported equal */

// if the lengths of the array are not equal
// - return false
// otherwise, look at each item in the second array
// - if the item in the first array at the current index is not equal to the current item in the second array
//  - return false
// return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < second.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
