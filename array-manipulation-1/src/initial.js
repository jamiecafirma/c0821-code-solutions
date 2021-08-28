/* exported initial */

// create storage for output
// create storage for index of last element
// subtract length of input by 1 to get last index, then add it to storage
// look at each element in input except for the last
// - add current element to output
// return output

function initial(array) {
  var exceptLast = [];
  var lastIndex = 0;
  lastIndex += array.length - 1;
  for (var i = 0; i < lastIndex; i++) {
    exceptLast.push(array[i]);
  }
  return exceptLast;
}
