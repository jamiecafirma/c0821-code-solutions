/* exported flatten */

// create storage for output
// look at each item in the array
// - if the current item is an array
//  - look at each item in the array
//    - add current item to the output
// - otherwise, add current item to the array
// return the output

function flatten(array) {
  var flattened = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (var a = 0; a < array[i].length; a++) {
        flattened.push(array[i][a]);
      }
    } else {
      flattened.push(array[i]);
    }
  }
  return flattened;
}
