/* exported zip */

// create storage for the output
// create storage for the current array
// determine which array is shorter and name it as the shorter array
// - look at each item in the shorter array
//  - add the item at the current index, from the first array, to the current array
//  - add the item at the current index, from the second array, to the current array
//  - add the current array to the output
//  - clear the current array
// return the output

function zip(first, second) {
  var zipped = [];
  var currentArray = [];
  var shorter = [];

  if (first.length <= second.length) {
    shorter = first;
  } else {
    shorter = second;
  }
  for (var i = 0; i < shorter.length; i++) {
    currentArray.push(first[i]);
    currentArray.push(second[i]);
    zipped.push(currentArray);
    currentArray = [];
  }
  return zipped;
}
