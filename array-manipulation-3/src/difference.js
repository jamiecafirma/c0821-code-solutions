/* exported difference */

// create storage for output
// create storage for a test that keeps track of whether an element is also in another array and set it to false
// create a function to check if an element in one array is found in another
// - look at each element in the first array
//   - look at each element in the second array
//     - if the current element in the first array is equal to the current element in the second array
//       - set the 'is in another array' test to true
//   - if the element is not in the other array
//     - add the current element to the output
//   - reset the 'is in another array' test
// check if any elements in the first array are in the second array and add the result to the output
// check if any elements in the second array are in the first array and add the result to the output
// return the output

function difference(first, second) {
  var symmetric = [];
  var isInOtherArr = false;

  function uniqueToArr(firstArr, secondArr, output) {
    for (var i = 0; i < firstArr.length; i++) {
      for (var s = 0; s < secondArr.length; s++) {
        if (firstArr[i] === secondArr[s]) {
          isInOtherArr = true;
        }
      }
      if (isInOtherArr === false) {
        output.push(firstArr[i]);
      }
      isInOtherArr = false;
    }
  }
  uniqueToArr(first, second, symmetric);
  uniqueToArr(second, first, symmetric);
  return symmetric;
}
