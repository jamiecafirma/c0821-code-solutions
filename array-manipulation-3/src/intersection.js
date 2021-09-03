/* exported intersection */

// create storage for output
// create storage for a test to check if an element is also in another array
// look at each element in the first array
// - look at each element in the second array
//  - if the current element is also in the second array
//    - set the 'is in another array' test to true
// - if the 'is in another array' test is true
//  - add the current element to the output
// - reset 'is in another array' test
// return the output

function intersection(first, second) {
  var inBothArr = [];
  var repeated = false;

  for (var i = 0; i < first.length; i++) {
    for (var s = 0; s < second.length; s++) {
      if (first[i] === second[s]) {
        repeated = true;
      }
    }
    if (repeated === true) {
      inBothArr.push(first[i]);
    }
    repeated = false;
  }
  return inBothArr;
}
