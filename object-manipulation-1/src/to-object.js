/* exported toObject */

// create storage for the output
// using the first element of the input, set the second element of the input as a value in the output
// return output

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
