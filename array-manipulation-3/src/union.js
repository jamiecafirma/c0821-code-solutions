/* exported union */

// create storage for the output
// create storage for a test to see if an element is already in the output
// create a function to add elements to the output only if they are not already there
// - create storage for the output
// - look at each element in the array
//   - look at each element in the output
//     - if the current element is in the output
//       - set the 'is already in output' test to true
//   - if the 'is already in output' test is false
//     - add current element to the output
//   - reset 'is already in output' test
// check if the elements in the first array are already in the output and add the ones that aren't
// check if the elements in the second array are already in the output and add the ones that aren't
// return the output

function union(first, second) {
  var repeatedInBoth = [];
  var repeated = false;

  function isInOutput(array, output) {
    for (var i = 0; i < array.length; i++) {
      for (var e = 0; e < output.length; e++) {
        if (array[i] === output[e]) {
          repeated = true;
        }
      }
      if (repeated === false) {
        output.push(array[i]);
      }
      repeated = false;
    }
  }

  isInOutput(first, repeatedInBoth);
  isInOutput(second, repeatedInBoth);
  return repeatedInBoth;
}
