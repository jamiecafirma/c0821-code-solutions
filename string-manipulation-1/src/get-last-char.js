/* exported getLastChar */

// create storage for the last character of input
// create storage for the length of the input
// create storage for the index of the output
// find the length of the input and add it to the length storage
// subtract 1 from the length of the input to get the index of the last character
// use the index to find the last character and add it to the output
// return the output

function getLastChar(string) {
  var lastChar = '';
  var inputLength = 0;
  var lastIndex = 0;
  inputLength += string.length;
  lastIndex += inputLength - 1;
  lastChar += string[lastIndex];
  return lastChar;
}

// alt version
// function getLastChar(string) {
//   return string[string.length - 1];
// }
