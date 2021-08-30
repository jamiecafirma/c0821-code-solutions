/* exported compact */

// create storage for output
// look at each element in input
// - if current element is true
//  - add it to the output
// return output

function compact(array) {
  var truthy = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthy.push(array[i]);
    }
  }
  return truthy;
}
