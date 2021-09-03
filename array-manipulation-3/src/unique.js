/* exported unique */

// create storage for the output
// create storage for a test that keeps track of whether a value is repeated and set it to false
// look at each element in the array
// - look at each element in the output
//  - if the current element in the array is found in the output
//    - set the repeated test to true
// - if the current element hasn't been repeated
//  - add the current element to the output
// - reset the repeated test
// return the output

function unique(array) {
  var isUnique = [];
  var repeated = false;

  for (var i = 0; i < array.length; i++) {
    for (var u = 0; u < isUnique.length; u++) {
      if (array[i] === isUnique[u]) {
        repeated = true;
      }
    }
    if (repeated === false) {
      isUnique.push(array[i]);
    }
    repeated = false;
  }
  return isUnique;
}
